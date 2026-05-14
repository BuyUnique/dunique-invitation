import { WEDDING_DATAS } from '../constants/weddingDatas';

export const getWeddingData = () => {
  const { pathname } = window.location;
  const slugStartIndex = pathname.lastIndexOf('/') + 1;
  const slug = pathname.slice(slugStartIndex);

  return WEDDING_DATAS.find(data => data.id === slug);
};
