import {useHistory} from 'react-router-dom';
import MemberService from '../../services/member.service';
import {useEffect, useState} from 'react';

export const Detail = () => {
  const {goBack} = useHistory();
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response: any = await MemberService.getAll();
      setUsers(response); // 데이터는 response.data 안에 들어있습니다.
      setLoading(false);

    };

    fetchUsers();
  }, []);
  if (loading) return <div>로딩중..</div>;
  if (!users) return null;
  // @ts-ignore
  return (
    <div>
      <ul>
        {(users as any)!.map((user: any) => (
          <li key={user.seq}>
            {user.email} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={goBack}>GoBack</button>
    </div>
  );
};
