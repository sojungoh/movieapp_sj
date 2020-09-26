import React from "react";
import "./Home.css";

function About() {
  return (
    <div className="about-text">
      <h3>
        Nomad Coder의 'ReactJS로 영화 웹 서비스 만들기' 클론 코딩을 베이스로
        하여 제작한 페이지입니다
        <br />
        무료 토론토 다운로드 사이트 YTS에서 추천하는 영화 순위를 1위부터 20위까지 확인하실 수 있어요!
        <br />
        UI 디자인은 혼자 구현했습니다. 코드가 궁금하신 분들은 제 GitHub에서 확인하실
        수 있습니다(●'◡'●)
        <br /><br />
        Movie API : https://yts-proxy.now.sh/list_movies.json?sort_by=rating
        <br />
        MY GitHub : https://github.com/sojungoh/movieapp_sj
      </h3>
    </div>
  );
}

export default About;
