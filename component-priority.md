# OrchidUI — Component Usage Priority

> Usage counted across **760 `.vue` files** in `hitpay2020/src/frontend/dashboard`.  
> Goal: build richer examples/schema for the most-used components first.

---

## Top 20 — Priority for detailed schema/examples

| # | Component | Files | Status |
|---|-----------|------:|--------|
| 1 | FormBuilder | 99 | [x] |
| 2 | EmptyPage | 74 | [ ] |
| 3 | DataTable | 54 | [ ] |
| 4 | Select | 48 | [ ] |
| 5 | ListItem | 26 | [ ] |
| 6 | Table | 24 | [ ] |
| 7 | SingleFileUpload | 24 | [ ] |
| 8 | Input | 23 | [ ] |
| 9 | DatePicker | 21 | [ ] |
| 10 | Skeleton | 20 | [ ] |
| 11 | Radio | 20 | [ ] |
| 12 | Checkbox | 19 | [ ] |
| 13 | RadioGroup | 16 | [ ] |
| 14 | Dropdown | 16 | [ ] |
| 15 | Draggable | 16 | [ ] |
| 16 | Calendar | 15 | [ ] |
| 17 | DropdownItem | 14 | [ ] |
| 18 | CustomerCard | 14 | [ ] |
| 19 | TextArea | 13 | [ ] |
| 20 | TextEditor | 12 | [ ] |

---

## All components (sorted by usage)

```
FormBuilder          99
EmptyPage            74
DataTable            54
Select               48
ListItem             26
Table                24
SingleFileUpload     24
Input                23
DatePicker           21
Skeleton             20
Radio                20
Checkbox             19
RadioGroup           16
Dropdown             16
Draggable            16
Calendar             15
DropdownItem         14
CustomerCard         14
TextArea             13
TextEditor           12
CopyTooltip          12
TableCell            10
InfoCard             10
Icon                 10
FloatContent         10
AdditionalContent    10
Option                9
CheckboxesGroup       9
Pagination            8
MultipleUploadFile    8
ConfirmationModal     8
OcAccountVerificationContent  7
DraggableList         7
Chip                  7
NumberInput           6
ListDetail            6
Toggle                5
SubSidebar            5
SelectOptions         5
Overview              5
ColorPicker           5
Tooltip               4
TableLink             4
PhoneInput            4
CodeBlock             4
Button                4
Accordion             4
TimePicker            3
Sidebar               3
OcOnboardingListItem  3
EmojiPicker           3
Variants              2
Variant               2
Theme                 2
TableCellContent      2
Snackbar              2
ShareIcon             2
PrimaryActions        2
PageTitleRight        2
PageTitle             2
OcOverviewPieChart    2
OcOnboardingRecap     2
Modal                 2
LottieAnimation       2
LinkInput             2
Header                2
ComplexCalendar       2
Card                  2
WhiteList             1
VerificationOption    1
TransferSummary       1
TopBanner             1
ThumbnailSection      1
Tag                   1
Tabs                  1
TableHeader           1
TabToSelect           1
Steps                 1
Step                  1
Slider                1
SectionItem           1
ProgressBar           1
Popper                1
PieChart              1
OverviewMonthlyBarChart  1
OverviewItem          1
OverviewIcon          1
OnboardingProgressbar 1
OcSection             1
OcModalPage           1
OcAccountVerificationBox  1
LineChart             1
InputOption           1
InfoCardButton        1
FilterSearch          1
FeatureOverviewCard   1
ExpandingTableRow     1
ExpandingTable        1
Cropper               1
CardInput             1
Box                   1
BarRaceChart          1
BarChart              1
Banner                1
AuthenticationOption  1
AccountSetupProgress  1
AccountSetup          1
```

---

## Not found (0 usage)

PrevNext, PaginationNumber, HorizontalProgressbar, OcRowItemData, OnboardingAccordion,
OnboardingProductOption, PaymentTab, SwitchTabs, SubHeader, HeaderLeft, HeaderCenter,
HeaderRight, Checklist, SidebarSubmenu, SidebarHead, SideBarMenu,
SidebarSubMenuItem, SidebarFooter, SidebarFeatureBanners, SandboxBanner, BaseInput,
Criteria, GroupOptions, RangeInput, FilterSearchFor, FilterForm, SupportMenu, ModalCropper,
ThumbnailTheme, SubPlanCard, TimePopup

---

## Checklist — Detailed Schema/Examples

### Phase 1 — Top 10 (highest priority)
- [x] **FormBuilder** — complete props schema, examples of dynamic forms from JSON schema
- [ ] **EmptyPage** — variants (no data, error, loading), icon + action button examples
- [ ] **DataTable** — filter, pagination, bulk actions, custom slot examples
- [ ] **Select** — single, multi, async search, grouped options examples
- [ ] **ListItem** — all layout variants (timeline, webhook, payment, accordion)
- [ ] **Table** — sorting, selection, custom cell type examples
- [ ] **SingleFileUpload** — upload preview, size limit, error state examples
- [ ] **Input** — icon, prefix/suffix, password toggle, error state examples
- [ ] **DatePicker** — single date, range, format options examples
- [ ] **Skeleton** — various shapes (text, card, table row) examples

### Phase 2 — Top 11–20
- [ ] **Radio** — single with label, disabled state examples
- [ ] **Checkbox** — single + group, indeterminate state examples
- [ ] **RadioGroup** — horizontal/vertical layout examples
- [ ] **Dropdown** — with DropdownItem, icons, nested examples
- [ ] **Draggable** — reorderable list examples
- [ ] **Calendar** — single date, range selection examples
- [ ] **DropdownItem** — variants (icon, destructive, disabled)
- [ ] **CustomerCard** — all data fields examples
- [ ] **TextArea** — auto-resize, max length examples
- [ ] **TextEditor** — toolbar options, read-only mode examples

### Phase 3 — Medium usage (5–12 files)
- [ ] CopyTooltip
- [ ] TableCell (variants: content/chip/datetime/icon/image)
- [ ] InfoCard
- [ ] Icon
- [ ] FloatContent
- [ ] AdditionalContent
- [ ] Option
- [ ] CheckboxesGroup
- [ ] Pagination
- [ ] MultipleUploadFile
- [ ] ConfirmationModal
- [ ] OcAccountVerificationContent
- [ ] DraggableList
- [ ] Chip
- [ ] NumberInput
- [ ] ListDetail
- [ ] Toggle
- [ ] SubSidebar
- [ ] SelectOptions
- [ ] Overview
- [ ] ColorPicker
