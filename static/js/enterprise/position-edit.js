
  document.getElementById("show-position-btn").addEventListener("click", function () {
    fetch("positionregisterleft.html")  // positionregisterleft.html을 가져옴
      .then(response => response.text()) // 텍스트로 변환
      .then(data => {
        document.getElementById("position-info").innerHTML = data; // 가져온 데이터를 div에 삽입
        document.getElementById("position-info").style.display = "block"; // 보이도록 설정
      })
      .catch(error => console.error("Error loading position info:", error));
  });
