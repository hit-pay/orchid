import { defineAsyncComponent } from 'vue'

export * from './DataDisplay/Table/OcTable.js'
export * from './DataDisplay/Pagination/OcPagination.js'
export * from './DataDisplay/Overview/OcOverview.js'
export * from './DataDisplay/CustomerCard/OcCustomerCard.js'
export * from './DataDisplay/TransferSummary/OcTransferSummary.js'
export * from './DataDisplay/ListItem/OcListItem.js'
export * from './DataDisplay/ListDetail/OcListDetail.js'
export * from './DataDisplay/InfoCard/OcInfoCard.js'
export * from './DataDisplay/ProgressBar/OcProgressBar.js'
export * from './DataDisplay/FloatContent/OcFloatContent.js'
export * from './DataDisplay/HorizontalProgressbar/OcHorizontalProgressbar.js'
export * from './DataDisplay/OnboardingListItem/OcOnboardingListItem.js'

export * from './Disclosure/Accordion/OcAccordion.js'
export * from './Disclosure/OnboardingAccordion/OnboardingAccordion.js'
export * from './Disclosure/Tabs/Tabs.js'
export * from './Disclosure/Steps/OcSteps.js'
export * from './Disclosure/Variants/OcVariants.js'
export * from './Disclosure/SwitchTabs/OcSwitchTabs.js'

export * from './Elements/Header/OcHeader.js'
export * from './Elements/PageTitle/OcPageTitle.js'
export * from './Elements/Sidebar/OcSidebar.js'
export * from './Elements/SubSidebar/OcSubSidebar.js'
export * from './Elements/EmptyPage/OcEmptyPage.js'
export * from './Elements/AdditionalContent/OcAdditionalContent.js'
export * from './Elements/Skeleton/OcSkeleton.js'
export * from './Elements/FeatureOverviewCard/OcFeatureOverviewCard.js'
export * from './Elements/SandboxBanner/OcSandboxBanner.js'
export * from './Elements/TopBanner/OcTopBanner.js'
export * from './Elements/Box/OcBox.js'
export * from './Elements/Section/OcSection.js'
export * from './Elements/AuthenticationOption/AuthenticationOption.js'
export * from './Elements/VerificationOption/OcVerificationOption.js'

export * from './Feedback/Chip/OcChip.js'
export * from './Feedback/Snackbar/OcSnackbar.js'
export * from './Feedback/Banner/OcBanner.js'
export * from './Feedback/ShareIcon/OcShareIcon.js'
export * from './Feedback/Tag/OcTag.js'

export * from './Form'

export * from './MediaAndIcons/Avatar/OcAvatar.js'
export * from './MediaAndIcons/Icon/OcIcon.js'

export * from './Overlay/Dropdown/OcDropdown.js'
export * from './Overlay/Tooltip/OcTooltip.js'
export * from './Overlay/Modal/OcModal.js'
export * from './Overlay/ConfirmationModal/OcConfirmationModal.js'
export * from './Overlay/Popper/OcPopper.js'
export * from './Overlay/SupportMenu/OcSupportMenu.js'
export * from './Overlay/CopyTooltip/OcCopyTooltip.js'
export * from './Overlay/Whitelist/OcWhiteList.js'

export * from './Theme/OcTheme.js'

export * from './FormBuilder/OcFormBuilder.js'

//

const DataTable = defineAsyncComponent(() => import('./DataTable/OcDataTable.vue'))
const FilterSearch = defineAsyncComponent(() => import('./DataTable/OcFilterSearch.vue'))
const FilterSearchFor = defineAsyncComponent(() => import('./DataTable/OcFilterSearchFor.vue'))
const FilterForm = defineAsyncComponent(() => import('./DataTable/OcFilterForm.vue'))

//
const ComplexCalendar = defineAsyncComponent(
  () => import('./Form/ComplexCalendar/OcComplexCalendar.vue')
)
const ComplexDatePicker = defineAsyncComponent(
  () => import('./Form/ComplexDatePicker/OcComplexDatePicker.vue')
)
//
const ModalCropper = defineAsyncComponent(() => import('./Form/ModalCropper/OcModalCropper.vue'))
const Cropper = defineAsyncComponent(() => import('./Form/Cropper/OcCropper.vue'))
//
const Draggable = defineAsyncComponent(() => import('./Elements/Draggable/OcDraggable.vue'))
const DraggableList = defineAsyncComponent(() => import('./Elements/Draggable/OcDraggableList.vue'))
//
const EmojiPicker = defineAsyncComponent(() => import('./Form/EmojiPicker/OcEmojiPicker.vue'))
//
const ThumbnailTheme = defineAsyncComponent(
  () => import('./StoreDesign/ThumbnailTheme/ThumbnailTheme.vue')
)

const ThumbnailSection = defineAsyncComponent(
  () => import('./StoreDesign/ThumbnailSection/ThumbnailSection.vue')
)
const SubPlanCard = defineAsyncComponent(() => import('./StoreDesign/SubPlanCard/SubPlanCard.vue'))

//
const TimePopup = defineAsyncComponent(() => import('./Form/TimePicker/OcTimePopup.vue'))
const TimePicker = defineAsyncComponent(() => import('./Form/TimePicker/OcTimePicker.vue'))

const AccountSetupProgress = defineAsyncComponent(
  () => import('./Elements/Sidebar/OcAccountSetupProgress.vue')
)

export {
  // datatable
  DataTable,
  FilterSearch,
  FilterSearchFor,
  FilterForm,
  // calendar
  ComplexCalendar,
  ComplexDatePicker,
  // cropper
  ModalCropper,
  Cropper,
  // draggable
  Draggable,
  DraggableList,
  // emoji picker
  EmojiPicker,
  // store design
  ThumbnailTheme,
  ThumbnailSection,
  SubPlanCard,
  TimePopup,
  TimePicker,
  // sidebar
  AccountSetupProgress
}
