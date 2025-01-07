import { defineAsyncComponent } from 'vue'

import ColorPicker from '@/orchidui-dashboard/Dashboard/ColorPicker/OcColorPicker.vue'
import TextEditor from '@/orchidui-dashboard/Dashboard/TextEditor/OcTextEditor.vue'
import ColorPickerPopup from '@/orchidui-dashboard/Dashboard/ColorPicker/components/OcColorPickerPopup.vue'
import OnboardingProgressbar from '@/orchidui-dashboard/Dashboard/OnboardingProgressbar/OcOnboardingProgressbar.vue'
const CodeBlock = defineAsyncComponent(
  () => import('@/orchidui-dashboard/Dashboard/CodeBlock/OcCodeBlock.vue')
)
const LottieAnimation = defineAsyncComponent(
  () => import('@/orchidui-dashboard/Dashboard/LottieAnimation/OcLottieAnimation.vue')
)
export * from '@/orchidui-dashboard/Dashboard/Charts/LineChart/OcLineChart.js'
export * from '@/orchidui-dashboard/Dashboard/Charts/PieChart/OcPieChart.js'
export * from '@/orchidui-dashboard/Dashboard/Charts/BarChart/OcBarChart.js'
export * from '@/orchidui-dashboard/Dashboard/Charts/BarRaceChart/OcBarRaceChart.js'
export * from '@/orchidui-dashboard/Dashboard/Card/OcCard.js'

export {
  OnboardingProgressbar,
  // TextEditor
  TextEditor,
  // ColorPicker
  ColorPicker,
  ColorPickerPopup,
  LottieAnimation,
  CodeBlock
}

// all components :
// OnboardingProgressbar
// TextEditor
// ColorPicker
// ColorPickerPopup
// CodeBlock
// Card
// BarChart
// BarRaceChart
// LineChart
// PieChart
