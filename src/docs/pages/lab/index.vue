<template>
    <div>
        <doc-header :category="category"></doc-header>
        <!-- darg icon https://h0.hucdn.com/open/201734/175363ad9c01a51b_200x200.png -->
        <div class="lab">
            <h1><i class="iconfont">&#xe615;</i>Morning Laboratory</h1>
            <div class="area">
                <ui-pagination
                    :list="list"
                    :page-size="pageSize"
                >
                    <template slot-scope="{page, items}">
                        <ui-table :list="items" empty-cell-value="false"></ui-table>
                    </template>
                </ui-pagination>
            </div>
        </div>
        <doc-footer></doc-footer>
    </div>
</template>
 
<script>
import DocHeader                    from 'Docs/common/DocHeader.vue';
import DocFooter                    from 'Docs/common/DocFooter.vue';

export default {
    data : function () {
    
        return {
            pageSize : 30,
            list : [
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctorsdoctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Tim Boelaars', age : 20, gender : 'male', job : 'driver'},
                {name : 'Andrew Colin Beck', age : 41, gender : 'female', job : 'engineer'},
                {name : 'Gustavo Zambelli', age : 23, gender : 'male', job : 'teacher'},
                {name : 'Victor Erixon', age : 15, gender : 'female', job : 'doctors'},
                {name : 'Shaun Moynihan', age : 27, gender : 'female', job : 'driver'},
                {name : 'Emir Ayouni', age : 21, gender : 'male', job : 'gardener'}
            ]
        };        

    },
    components : {
        'doc-header' : DocHeader,
        'doc-footer' : DocFooter
    },
    mounted : function () {}
};
</script>

<style lang="less">
@import '~Docs/common/common.less';

.lab{
    width: 1000px;
    padding: 20px;
    margin: 0 auto;
    border-left: 1px #eee solid;
    border-right: 1px #eee solid;

    .area{
        display: block;
        padding-top: 20px;
        min-height: 800px;
    }

    > h1{
        margin: 0;
        background: #efefef;
        font-weight: 400;
        vertical-align: middle;
        font-size: 14px;
        display: inline-block;
        padding-right: 10px;

        .iconfont{
            font-size: 30px;
            vertical-align: middle;
            display: inline-block;
            background: #f24b64;
            color: #fff;
            padding: 2px 5px;
            margin-right: 10px;
        }
    }
}
</style>
