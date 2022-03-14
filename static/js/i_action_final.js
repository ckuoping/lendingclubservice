/*=======================================*/
// 測試區
/*=======================================*/
/*

const bar_control_1 = document.querySelector("#bar-control-1")

bar_control_1.addEventListener('input', function(event) {
    console.log(event.target)
    if (event.target.id == "bar-control-1") {
        event.target.parentElement.nextElementSibling.innerHTML = event.target.value
    }
})
* /

/*=======================================*/
// 正式區-輪播
/*=======================================*/

// 輪播區的DOM
const form_loan_amt = document.getElementById('form-loan-amt')
const form_grade = document.getElementById('form-grade')
const form_interest = document.getElementById('form-interest')
let disbursement_value = 0
let term_value = 0
const form_purpose = document.getElementById('form-item-purpose-groups')
const form_consumption = document.getElementById('form-consumption')
const form_dept = document.getElementById('form-item-debt-groups')
const form_balance = document.getElementById('form-item-balance-groups')

// 輪播區按鈕的DOM
const prediction_btn = document.getElementById('prediction-btn')

// 輪播區顯示的DOM
const prediction_result = document.getElementById('prediction-result')
let scroll_offset = $("#site").offset();
// 輪播按鈕送出事件
prediction_btn.addEventListener('click', function(event) {
    // 顯示每個使用者輸入的選項
    console.log(event.target)
    console.log("loan", form_loan_amt.value)
    console.log("grade", form_grade.value)
    console.log("interest", form_interest.value)
    check_disbursement()
    console.log("disbursement", disbursement_value)
    check_term()
    console.log("term", term_value)
    console.log("purpose", form_purpose.value)
    console.log("consumption", form_consumption.value)
    console.log("dept", form_dept.value)
    console.log("balance", form_balance.value)
    console.log("result", prediction_result)

    prediction_result.innerHTML = ""



    setTimeout(function() {
        if (parseInt(form_grade.value) >= 3) {
            prediction_result.innerHTML = `<h1 class="text-center prediction-italy-style mt-4">Bad Loan</h1>
                    <h4  class="text-center">This borrower is not an ideal person for you to make investments</h4>  
                    <i class="fas fa-sad-tear prediction-size-style prediction-bad-color "></i>
    `
        } else if (parseInt(form_grade.value) < 3) {
            prediction_result.innerHTML = `<h1 class="text-center prediction-italy-style mt-4">Good Loans</h1>
                    <h4  class="text-center">This borrower is good for you to make investments</h4>
                    <i class="fas fa-laugh-wink prediction-size-style prediction-good-color"></i>
    `
        }
    }, 2000)
    scrollToView()
})


/*=======================================*/
// 移動滾軸區
/*=======================================*/

bodyTop = window.pageYOffset;

/*=======================================*/
// 後台區
/*=======================================*/
function check_disbursement() {
    if (document.getElementById('disbursement1').checked) {
        disbursement_value = document.getElementById('disbursement1').value;
    } else if (document.getElementById('disbursement2').checked) {
        disbursement_value = document.getElementById('disbursement2').value;
    }
}

function check_term() {
    if (document.getElementById('term1').checked) {
        term_value = document.getElementById('term1').value;
    } else if (document.getElementById('term2').checked) {
        term_value = document.getElementById('term2').value;
    }
}

function scrollToView() {
    document.getElementById('prediction-btn').scrollIntoView({
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
    })
}