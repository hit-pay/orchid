import { defineAsyncComponent } from 'vue'

import DataTable from '@/orchidui-dashboard/Dashboard/DataTable/OcDataTable.vue'
import FilterSearch from '@/orchidui-dashboard/Dashboard/DataTable/OcFilterSearch.vue'
import FilterSearchFor from '@/orchidui-dashboard/Dashboard/DataTable/OcFilterSearchFor.vue'
import FilterForm from '@/orchidui-dashboard/Dashboard/DataTable/OcFilterForm.vue'
import ColorPicker from '@/orchidui-dashboard/Dashboard/ColorPicker/OcColorPicker.vue'
import TextEditor from '@/orchidui-dashboard/Dashboard/TextEditor/OcTextEditor.vue'
import ColorPickerPopup from '@/orchidui-dashboard/Dashboard/ColorPicker/components/OcColorPickerPopup.vue'
import OnboardingProgressbar from '@/orchidui-dashboard/Dashboard/OnboardingProgressbar/OcOnboardingProgressbar.vue'
const CodeBlock = defineAsyncComponent(
  () => import('@/orchidui-dashboard/Dashboard/CodeBlock/OcCodeBlock.vue')
)

export * from '@/orchidui-dashboard/Dashboard/Charts/LineChart/OcLineChart.js'
export * from '@/orchidui-dashboard/Dashboard/Charts/PieChart/OcPieChart.js'
export * from '@/orchidui-dashboard/Dashboard/Charts/BarChart/OcBarChart.js'
export * from '@/orchidui-dashboard/Dashboard/Charts/BarRaceChart/OcBarRaceChart.js'
export * from '@/orchidui-dashboard/Dashboard/Card/OcCard.js'

export {
  OnboardingProgressbar,
  // DataTable
  DataTable,
  FilterSearch,
  FilterSearchFor,
  FilterForm,
  // TextEditor
  TextEditor,
  // ColorPicker
  ColorPicker,
  ColorPickerPopup,
  CodeBlock
}
