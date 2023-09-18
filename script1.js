function toggleRadio(type) {
    const radioInput = document.getElementById(type + 'RadioInput');
    const radioLabel = document.getElementById(type + 'Radio');

    // もう片方のラジオボタンの選択状態を解除
    const otherType = type === 'student' ? 'corporate' : 'student';
    const otherRadioInput = document.getElementById(otherType + 'RadioInput');
    const otherRadioLabel = document.getElementById(otherType + 'Radio');
    otherRadioInput.checked = false;
    otherRadioLabel.classList.remove('selected');

    if (radioInput.checked) {
        radioLabel.classList.add('selected');
    } else {
        radioLabel.classList.remove('selected');
    }
}

function goToNextPage() {
    const studentChecked = document.getElementById('studentRadioInput').checked;
    const corporateChecked = document.getElementById('corporateRadioInput').checked;
    if (studentChecked || corporateChecked) {
        // ここに次のページへの遷移処理を記述
        alert('次のページに進みます');
    } else {
        alert('学生か法人のいずれかを選択してください');
    }
}
