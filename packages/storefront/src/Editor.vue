<template>
  <div>
    <textarea 
    class="m-8 border-3 border-purple-100"
    @input="onUpdateTemplate" 
    
    >{{ Templates['SBtnPrimary'] }}</textarea>
  </div>
</template>
<script setup>
import { Templates, updateTemplate } from '@/app'
const onUpdateTemplate = ($e) => {
  updateTemplate('SBtnPrimary', $e.target.value)
}
</script>
