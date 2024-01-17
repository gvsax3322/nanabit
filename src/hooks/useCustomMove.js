import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { getNum } from "../util/util";

export const useCustomMove = () => {
  // navigate (패스이동 hook)
  const navigate = useNavigate();

  // 뒤로가기
  const moveToPrev = () => {
    navigate(-1);
  };

  // 메인으로 이동
  const moveToMain = () => {
    navigate("/main");
  };
  // 로그인으로 이동
  const moveToLogin = () => {
    navigate("/login");
  };
  // 화원가입으로 이동
  const moveToSignUp = () => {
    navigate("/signUp");
  };
  // 커뮤니티로 이동
  const moveToCommu = () => {
    navigate("/commu");
  };

  // 주문조회로 이동
  const moveToOl = () => {
    navigate("/ol");
  };

  //마이페이지로 이동
  const moveToMypage = () => {
    navigate("/mypage");
  };

  //쿼리알아내기
  const [urlSearchParams, setUrlSearchParams] = useSearchParams();

  // 현재 목록의 페이지 번호
  const page = urlSearchParams.get("page")
    ? parseInt(urlSearchParams.get("page"))
    : 1;

  // 페이지당 보여줄 개수
  const size = urlSearchParams.get("size")
    ? parseInt(urlSearchParams.get("size"))
    : 10;

  // 쿼리스트링 만들기
  const queryStrDeafult = createSearchParams({ page, size }).toString();

  //목록으로가기 기능 만들기
  //pageParam이 있으면 pageParam으로 이동
  //pageParam이 없으면 1페이지로 이동

  const moveToList = pageParam => {
    let queryStr = "";
    if (pageParam) {
      const pageNum = getNum(pageParam.page, page);
      const sizeNum = getNum(pageParam.size, size);
      //쿼리 만들기
      queryStr = createSearchParams({
        page: pageNum,
        size: sizeNum,
      }).toString();
    } else {
      queryStr = queryStrDeafult;
    }
    navigate({ pathname: "../list", search: queryStr });
  };

  // 수정창 이동하기
  const moveToModify = tno => {
    navigate({ pathname: `../modify/${tno}`, search: queryStrDeafult });
  };

  //페이지 이동하기

  // 상세 내용 보기
  const moveToRead = tno => {
    navigate({
      pathname: `../read/${tno}`,
      search: queryStrDeafult,
    });
  };

  return {
    moveToList,
    moveToModify,
    page,
    size,
    moveToRead,
  };
};

export default useCustomMove;