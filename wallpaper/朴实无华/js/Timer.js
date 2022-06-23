class Timer {
    // 构造器
    constructor(interval) {
        this.thread = null;
        this.teskList = []
        this.interval = interval
    }

    // 往任务列表里添加任务
    addTesk(callback) {
        this.teskList.push(callback)
    }

    // 运行任务列表里的任务
    runTesk() {
        for (const i in this.teskList) {
            if (Object.hasOwnProperty.call(this.teskList, i)) {
                this.teskList[i]()
            }
        }
    }

    // 运行计时器
    start() {
        let obj = this
        this.thread = setInterval(function () {
            obj.runTesk()
        }, this.interval)
    }

    // 停止计时器
    stop() {
        clearInterval(this.thread)
    }
}