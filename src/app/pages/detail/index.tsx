import { useParams, useHistory } from 'react-router-dom';

export const Detail = () => {
  const { goBack } = useHistory();
  const params: { id: string } = useParams();

  return (
    <div>
      <div>Detail {params.id}</div>
      <button onClick={goBack}>GoBack</button>
    </div>
  );
};
