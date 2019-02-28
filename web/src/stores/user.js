import { observable, action } from 'mobx';

class UserStore {
    // 用户信息
    @observable userInfo = {
        name: 1111
    };
    // 用户行为限制
    @observable actionRole = {};

    // 获取用户行为限制
    @action
    getActionRole() {

    }

    // 获取用户信息
    @action
    getUserInfo() {

    }

    @action
    logout() {

    }
}

export default new UserStore();
