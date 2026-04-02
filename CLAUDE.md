# OrchidUI — Claude Guidelines

## Packages

| Package               | NPM                  | Description                                     |
| --------------------- | -------------------- | ----------------------------------------------- |
| `@orchidui/core`      | `packages/core`      | Main UI component library                       |
| `@orchidui/dashboard` | `packages/dashboard` | Dashboard-specific components (charts, editors) |

## Importing Components

### Core

```js
import {
  Button,
  Modal,
  Input,
  Dropdown,
  Tooltip,
  Icon,
  Avatar,
  Table,
  DataTable,
  Pagination,
  Tabs,
  Steps,
  Accordion,
  Sidebar,
  Header,
  PageTitle,
  Skeleton,
  Banner,
  Chip,
  Tag
  // ... see full list below
} from '@orchidui/core'
import '@orchidui/core/dist/style.css'
```

### Dashboard

```js
import {
  LineChart,
  BarChart,
  PieChart,
  BarRaceChart,
  Card,
  TextEditor,
  ColorPicker,
  CodeBlock,
  LottieAnimation,
  OnboardingProgressbar,
  OverviewMonthlyBarChart
} from '@orchidui/dashboard'
```

## Available Components

### @orchidui/core (106 components)

Table, TableHeader, TableCell, TableCellContent, TableLink, ExpandingTable, ExpandingTableRow, ExpandingHeaderRow, Pagination, PrevNext, PaginationNumber, Overview, OverviewIcon, OverviewItem, CustomerCard, TransferSummary, ListItem, ListUrl, ListDetail, InfoCard, ProgressBar, FloatContent, HorizontalProgressbar, OcOnboardingListItem, OcOnboardingRecap, OcAccountVerificationContent, OcAccountVerificationBox, NewTable, OcRowItemData, Accordion, OnboardingAccordion, OnboardingProductOption, Tabs, PaymentTab, Steps, Step, Variants, Variant, SwitchTabs, Header, SubHeader, HeaderLeft, HeaderCenter, HeaderRight, TabToSelect, Checklist, PageTitle, PrimaryActions, PageTitleRight, Sidebar, SidebarSubmenu, AccountSetup, SidebarHead, SideBarMenu, SidebarSubMenuItem, SidebarFooter, SidebarFeatureBanners, AccountSetupProgress, SubSidebar, EmptyPage, AdditionalContent, InfoCardButton, Skeleton, FeatureOverviewCard, SandboxBanner, TopBanner, Box, OcSection, AuthenticationOption, VerificationOption, Chip, Snackbar, Banner, ShareIcon, Tag, Avatar, Icon, Dropdown, DropdownItem, Tooltip, Modal, OcModalPage, ConfirmationModal, Popper, SupportMenu, CopyTooltip, WhiteList, Theme, FormBuilder, DataTable, FilterSearch, FilterSearchFor, FilterForm, ComplexCalendar, ComplexDatePicker, ModalCropper, Cropper, Draggable, DraggableList, EmojiPicker, ThumbnailTheme, ThumbnailSection, SubPlanCard, TimePopup, TimePicker

### @orchidui/dashboard (13 components)

LineChart, PieChart, BarChart, BarRaceChart, Card, OcOverviewPieChart, OverviewMonthlyBarChart, ColorPicker, TextEditor, ColorPickerPopup, OnboardingProgressbar, CodeBlock, LottieAnimation

## Component Documentation (JSON)

Detailed props, events, and slots for every component:

- Core: `public/docs/orchid-core.json`
- Dashboard: `public/docs/orchid-dashboard.json`

## Usage Example

```vue
<script setup>
import { Modal, Button, Input } from '@orchidui/core'
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <Button label="Open" @click="isOpen = true" />

  <Modal v-model="isOpen" title="Example" @confirm="isOpen = false">
    <Input placeholder="Type something..." />
  </Modal>
</template>
```

## Notes

- All components are for **Vue 3** with Composition API
- Styling uses **Tailwind CSS** with OrchidUI design tokens (`oc-*` prefix)
- Icons use the `Icon` component with a `name` prop — e.g. `<Icon name="check" />`
- Boolean props follow `is*` convention — e.g. `isLoading`, `isDisabled`
- v-model on form components uses `modelValue` + `update:modelValue`
