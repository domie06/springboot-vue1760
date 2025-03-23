const base = {
    get() {
                return {
            url : "http://localhost:8080/riyongpinwangzhan/",
            name: "riyongpinwangzhan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/riyongpinwangzhan/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "日用品网站"
        } 
    }
}
export default base
