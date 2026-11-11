// 페이지의 모든 HTML 요소가 로드된 후 실행
document.addEventListener("DOMContentLoaded", () => {

  // ============================================================
  // 1. 제품 카테고리 필터링 (Tab Buttons)
  // ============================================================
  const tabBtns = document.querySelectorAll(".tab-btn");
  const productCards = document.querySelectorAll(".product-card");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // 1) 기존 버튼의 active 클래스 제거 후 클릭한 버튼에 붙이기
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // 2) 선택된 카테고리값 가져오기
      const category = btn.getAttribute("data-category");

      // 3) 카테고리에 맞춰 카드 보여주기/숨기기
      productCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        if (category === "all" || category === cardCategory) {
          card.style.display = "block"; // 보여줌
        } else {
          card.style.display = "none";  // 숨김
        }
      });
    });
  });

  // ============================================================
  // 2. FAQ 아코디언 (Accordion)
  // ============================================================
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");

      // 클릭 시 다른 열려있는 아코디언 닫기
      accordionItems.forEach((i) => {
        i.classList.remove("active");
        i.querySelector(".accordion-content").style.maxHeight = null;
      });

      // 닫혀있던 항목이라면 열기
      if (!isOpen) {
        item.classList.add("active");
        // 내용물의 실제 높이만큼 maxHeight를 지정해 부드럽게 열리도록 함
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });

});