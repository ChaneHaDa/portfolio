// PDF 출력 버튼 추가
document.addEventListener('DOMContentLoaded', function() {
    const printButton = document.createElement('button');
    printButton.textContent = 'PDF로 저장';
    printButton.id = 'printButton';
    
    printButton.addEventListener('click', function() {
        window.print();
    });
    
    document.body.appendChild(printButton);
}); 