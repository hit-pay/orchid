<template>
  <div class="flex">
    <textarea 
    class="w-full m-8 border-2 border-purple-800"
    rows="20"
    @keyup="onUpdateTemplate('SProductCard', $event)" 
    
    >{{ Templates['SProductCard'] }}</textarea>
    <textarea 
    class="w-full m-8 border-2 border-purple-800"
    rows="5"
    @keyup="onUpdateTemplate('SBtnPrimary',$event)" 
    
    >{{ Templates['SBtnPrimary'] }}</textarea>
  </div>
</template>
<script setup>
import { Templates, updateTemplate } from '@/app'
const onUpdateTemplate = (name, $e) => {
  updateTemplate(name,$e.target.value)
}
</script>
