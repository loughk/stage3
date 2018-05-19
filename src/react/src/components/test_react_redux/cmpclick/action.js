export default {
    action_adds(){
        // 只是用来传递条件来执行reducer,唯一的作用是将流程分层。
        return {
            type: "+"
        }
    }
}