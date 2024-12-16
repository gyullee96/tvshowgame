const openModalButtons = document.querySelectorAll(".openModalBtn"); // 여러 버튼 선택
const musicQuizModal = document.getElementById("musicQuizModal");
const relayQuizModal = document.getElementById("relayQuizModal");
const personQuizModal = document.getElementById("personQuizModal");
// const modalTitle = document.getElementById("modalTitle");
// const modalSubtitle = document.getElementById("modalSubtitle");
const closeMusicModalBtn = document.querySelector(".music-close");
const closeRelayModalBtn = document.querySelector(".relay-close");
const closePersonModalBtn = document.querySelector(".person-close");
const optionButtonsContainer = document.getElementById("optionButtons");
const audioFile = new Audio();

// 음악 퀴즈와 사자성어 퀴즈 모달 열기 이벤트
openModalButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        const quizType = event.target.getAttribute("data-title");

        if (quizType === "musicQuiz") {
            musicQuizModal.style.display = "flex";
        } else if (quizType === "relayQuiz") {
            relayQuizModal.style.display = "flex";
        } else if (quizType === "personQuiz") {
            personQuizModal.style.display = "flex";
        }
    });
});

// 모달 닫기 이벤트
closeMusicModalBtn.addEventListener("click", () => {
    musicQuizModal.style.display = "none";
});
closeRelayModalBtn.addEventListener("click", () => {
    relayQuizModal.style.display = "none";
});
closePersonModalBtn.addEventListener("click", () => {
    personQuizModal.style.display = "none";
});

// 모달 외부 클릭 시 닫기
window.addEventListener("click", (event) => {
    if (event.target === musicQuizModal) {
        musicQuizModal.style.display = "none";
    }
    if (event.target === relayQuizModal) {
        relayQuizModal.style.display = "none";
    }
    if (event.target === personQuizModal) {
        personQuizModal.style.display = "none";
    }
});

document.querySelector('#all').addEventListener('click', function () {
    document.getElementById('screen2').style.visibility = 'hidden';
    list = lists
    keys = Object.keys(list);
    values = Object.values(list);
    document.getElementById('level').innerHTML = 'ALL (~2023)'
})