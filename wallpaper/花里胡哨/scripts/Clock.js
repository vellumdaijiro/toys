// date.getDay()    // 得到星期几            0-6
// date.getMonth()  // 得到今年的第几个月    0-11
// date.getDate()   // 得到这个月的第几天    1-31
// date.getHours()  // 得到今天的时间中的小时 0-23
// date.getMinutes()// 得到今天的时间中的分钟 0-59
class ClockComponents {
    // 获取传入的元素及其子元素
    constructor (HTMLElement) {
        this.element = document.querySelector(HTMLElement)

        this.minutesEl = this.element.querySelector(".minutes")
        this.hoursEl = this.element.querySelector(".hour")
        this.monthEl = this.element.querySelector(".month")
        this.weekEl = this.element.querySelector(".week")
        this.dayEl = this.element.querySelector(".day")
    }

    // 往传入的元素中输出时间
    putTime() {
        this.weekEl.innerHTML = this.getTime().week
        this.monthEl.innerHTML = this.getTime().month + "月"
        this.dayEl.innerHTML = this.getTime().day + "日"
        this.hoursEl.innerHTML = this.getTime().hours
        let minutes = this.getTime().minutes
        this.minutesEl.innerHTML = minutes>=10?minutes:"0"+minutes.toString()
    }

    // 得到时间
    getTime() {
        this.date = new Date()
        let weekString = [
            "日",
            "一",
            "二",
            "三",
            "四",
            "五",
            "六"
        ]
        // 返回一个对象
        return {
            week: "周"+weekString[this.date.getDay()],
            day: this.date.getDate(),
            month: this.date.getMonth()+1,
            hours: this.date.getHours(),
            minutes: this.date.getMinutes(),
            seconds: this.date.getSeconds()
        }
    }
}