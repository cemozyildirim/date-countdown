import {
    Turkish
} from "flatpickr/dist/l10n/tr.js";
import moment from 'moment';

const date = document.querySelector('#end');
const today = moment().format('YYYY.MM.DD');
var btn = document.getElementById("start");

date.addEventListener('change', () => {
    if (today >= date.value) {
        alert("Please enter a valid date!");
        btn.classList.add("disable");
    } else {
        btn.classList.remove("disable");
    }
})

flatpickr(date, {
    enableTime: false,
    dateFormat: "Y.m.d",
    locale: "tr",
});