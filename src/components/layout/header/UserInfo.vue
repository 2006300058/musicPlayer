<template>
    <div class="justify-between items-center flex">
        <ElAvatar size="small" round class="bg-gray-200 mr-2" :src="''"></ElAvatar>
        <span class="login" @click="centerDialogVisible=true">点击登录 </span>
    </div>
    <div >
        <el-dialog v-model="centerDialogVisible" center width="330px" append-to-body title="登录">
            <el-form label-position="top"  >
                <el-form-item label="手机号码：" prop="phone" >
                    <el-input placeholder="请输入手机号码" :prefix-icon="Phone" v-model="phone"/>                 
                </el-form-item>
                
                <el-form-item label="密码："  prop="password">
                        <el-input placeholder="请输入密码" type="password" :prefix-icon="Lock" v-model="password" />  
                </el-form-item>
                <el-form-item style="display:flex ,justify-content: center">                   
                        <button class="button w-full mt-5 py-5" style="border-radius: 5px;" @click="loginSubmit"
                        >登录</button>                                    
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script setup lang="ts">
import {Lock, Phone} from '@icon-park/vue-next'
import type IconParkVue from '@/components/common/IconPark.vue';
import { toRef, ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import {useUserStore} from '@/stores/user'
import {storeToRefs} from "pinia";

const router = useRouter();
const {login, checkLogin} = useUserStore();
const {isLogin, profile, showLogin} = storeToRefs(useUserStore());
const phone = ref('');
const password = ref('')
const centerDialogVisible = ref(false);
const reg_phone = /^1[34578]\d{9}$/g;


const loginSubmit = () => {
    if(phone.value === '' || password.value==='') {
        alert('不能为空！')
        return;
    }
    if(!(/^1[34578]\d{9}$/g.test(phone.value))){
        alert("手机号码有误，请重填");  
        return ; 
    }
    login(phone.value, password.value)
};

onMounted(() => {
    checkLogin()
})


</script>

<style lang="scss" scoped>
    .login {
        @apply p-2 pr-3 cursor-pointer transition-all duration-300;
        @apply hover:text-red-500 hover:scale-110 ;
    }
</style>