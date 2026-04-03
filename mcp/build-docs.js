/**
 * Build static component documentation JSON files into /public/docs/
 *
 * Output:
 *   public/docs/orchid-core.json            — slim index (name, description, detail)
 *   public/docs/orchid-dashboard.json       — slim index
 *   public/docs/components/<Name>.json      — full component detail per file
 */

import { parse } from 'vue-docgen-api'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const CORE_ROOT = path.resolve(__dirname, '../packages/core/src')
const DASHBOARD_ROOT = path.resolve(__dirname, '../packages/dashboard/src')
const OUTPUT_DIR = path.resolve(__dirname, '../public/docs')
const COMPONENTS_DIR = path.join(OUTPUT_DIR, 'components')

const CORE_ALIASES = {
  '@/orchidui-core': CORE_ROOT,
  '@': CORE_ROOT
}

const DASHBOARD_ALIASES = {
  '@/orchidui-dashboard': DASHBOARD_ROOT,
  '@/orchidui-core': CORE_ROOT,
  '@': DASHBOARD_ROOT
}

// ── Component descriptions ───────────────────────────────────────────────────

// [name]: [description (1 sentence, function only), tags]
const COMPONENT_META = {
  // ── DataDisplay
  Table:                      ['Display tabular data with sorting, selection, and custom cell slots.', ['table', 'data', 'list']],
  TableHeader:                ['Header cell for Table, supports text or checkbox variant.', ['table', 'data']],
  TableCell:                  ['Body cell for Table, supports content/chip/datetime/icon/image variants.', ['table', 'data']],
  TableCellContent:           ['Two-line cell content with title and description.', ['table', 'data']],
  TableLink:                  ['Wraps table cell content as a link.', ['table', 'data']],
  ExpandingTable:             ['Table with collapsible/expandable nested rows.', ['table', 'data', 'tree']],
  ExpandingTableRow:          ['Single row inside ExpandingTable.', ['table', 'data']],
  ExpandingHeaderRow:         ['Header row for ExpandingTable.', ['table', 'data']],
  Pagination:                 ['Page navigation with prev/next and numbered buttons.', ['pagination', 'navigation']],
  PrevNext:                   ['Previous or next button used inside Pagination.', ['pagination', 'navigation']],
  PaginationNumber:           ['Numbered page button used inside Pagination.', ['pagination', 'navigation']],
  Overview:                   ['Group of metric cards showing key stats with icons.', ['stats', 'dashboard', 'metrics']],
  OverviewIcon:               ['Colored icon badge inside OverviewItem.', ['icon', 'stats']],
  OverviewItem:               ['Single metric card with title, value, and trend indicator.', ['stats', 'dashboard', 'metrics']],
  CustomerCard:               ['Display customer or beneficiary details.', ['customer', 'card', 'profile']],
  TransferSummary:            ['Show money transfer summary with amount, fee, and FX rate.', ['transfer', 'finance', 'summary']],
  ListItem:                   ['Versatile list row for timeline, webhook, payment, and accordion layouts.', ['list', 'timeline', 'item']],
  ListUrl:                    ['Display a labelled URL with copy button.', ['list', 'url', 'copy']],
  ListDetail:                 ['Label-value row in horizontal or vertical layout.', ['list', 'detail', 'label']],
  InfoCard:                   ['Content card with title, loading state, and header/footer slots.', ['card', 'content']],
  ProgressBar:                ['Step-based linear progress bar.', ['progress', 'steps']],
  FloatContent:               ['Floating side panel with title, description, and actions.', ['panel', 'overlay', 'sidebar']],
  HorizontalProgressbar:      ['Horizontal bar showing current vs max value.', ['progress', 'bar']],
  OcOnboardingListItem:       ['Onboarding checklist row with number badge and action button.', ['onboarding', 'checklist']],
  OcOnboardingRecap:          ['Collapsible recap card for onboarding sections.', ['onboarding', 'recap', 'summary']],
  OcAccountVerificationContent: ['Container for account verification steps.', ['verification', 'onboarding']],
  OcAccountVerificationBox:   ['Selectable verification option card.', ['verification', 'onboarding', 'option']],
  NewTable:                   ['Table with row expansion, selection, and named column slots.', ['table', 'data', 'list']],
  OcRowItemData:              ['List of labelled data items with optional chip and copy button.', ['list', 'data', 'detail']],
  // ── Disclosure
  Accordion:                  ['Collapsible section with header and body.', ['accordion', 'collapse', 'disclosure']],
  OnboardingAccordion:        ['Accordion with onboarding status variant.', ['accordion', 'onboarding']],
  OnboardingProductOption:    ['Selectable product option card with image.', ['onboarding', 'option', 'card']],
  Tabs:                       ['Tab bar for switching between views.', ['tabs', 'navigation']],
  PaymentTab:                 ['Tab selector for payment methods.', ['tabs', 'payment']],
  Steps:                      ['Step indicator for multi-step flows.', ['steps', 'wizard', 'progress']],
  Step:                       ['Single step inside Steps.', ['steps', 'wizard']],
  Variants:                   ['Group of selectable option cards.', ['variants', 'option', 'select']],
  Variant:                    ['Single selectable option card with icon and label.', ['variants', 'option']],
  SwitchTabs:                 ['Segmented control for switching between a few options.', ['tabs', 'toggle', 'switch']],
  // ── Layout / Elements
  Header:                     ['Top-level application header shell.', ['header', 'layout', 'navigation']],
  SubHeader:                  ['Secondary header below the main header.', ['header', 'layout']],
  HeaderLeft:                 ['Left slot of the Header.', ['header', 'layout']],
  HeaderCenter:               ['Center slot of the Header with back button support.', ['header', 'layout']],
  HeaderRight:                ['Right slot of the Header with action buttons.', ['header', 'layout']],
  TabToSelect:                ['Tab bar inside Header for route switching.', ['tabs', 'header', 'navigation']],
  Checklist:                  ['Checklist step item with index, label, and completion state.', ['checklist', 'onboarding']],
  PageTitle:                  ['Page title bar with back button and primary/secondary actions.', ['page', 'title', 'header']],
  PrimaryActions:             ['Primary action buttons or dropdown inside PageTitle.', ['button', 'actions']],
  PageTitleRight:             ['Right action area of PageTitle.', ['page', 'title', 'actions']],
  Sidebar:                    ['Main application sidebar with expandable menus.', ['sidebar', 'navigation', 'layout']],
  SidebarSubmenu:             ['Expandable submenu inside Sidebar.', ['sidebar', 'navigation']],
  AccountSetup:               ['Account setup progress widget inside Sidebar.', ['sidebar', 'onboarding', 'progress']],
  SidebarHead:                ['Header section of a Sidebar menu group.', ['sidebar', 'navigation']],
  SideBarMenu:                ['Single menu item in Sidebar.', ['sidebar', 'navigation', 'menu']],
  SidebarSubMenuItem:         ['Child menu item inside SidebarSubmenu.', ['sidebar', 'navigation']],
  SidebarFooter:              ['Footer section of the Sidebar.', ['sidebar', 'layout']],
  SidebarFeatureBanners:      ['Feature promotion banners inside Sidebar.', ['sidebar', 'banner', 'promo']],
  AccountSetupProgress:       ['Circular progress indicator for account setup in Sidebar.', ['sidebar', 'progress', 'onboarding']],
  SubSidebar:                 ['Secondary sidebar for sub-navigation.', ['sidebar', 'navigation']],
  EmptyPage:                  ['Placeholder shown when a section has no data.', ['empty', 'placeholder', 'state']],
  AdditionalContent:          ['Side panel with customer info, overview, and action buttons.', ['panel', 'sidebar', 'content']],
  InfoCardButton:             ['Selectable card button with title and content.', ['card', 'button', 'select']],
  Skeleton:                   ['Loading placeholder that mimics content shape.', ['loading', 'skeleton', 'placeholder']],
  FeatureOverviewCard:        ['Card listing product features with icons.', ['card', 'features', 'overview']],
  SandboxBanner:              ['Top banner indicating sandbox/test mode.', ['banner', 'sandbox', 'alert']],
  TopBanner:                  ['Dismissible top-of-page announcement banner.', ['banner', 'alert', 'notification']],
  Box:                        ['Clickable card with icon, title, and description.', ['card', 'box', 'button']],
  OcSection:                  ['Content section wrapper with optional title.', ['section', 'layout']],
  AuthenticationOption:       ['Selectable authentication method card.', ['auth', 'option', 'card']],
  VerificationOption:         ['Selectable verification method card.', ['verification', 'option', 'card']],
  // ── Feedback
  Chip:                       ['Status or category badge with color and style variants.', ['chip', 'badge', 'tag', 'status']],
  Snackbar:                   ['Toast notification with icon and action buttons.', ['toast', 'notification', 'alert']],
  Banner:                     ['Inline notification banner with dismiss support.', ['banner', 'notification', 'alert']],
  ShareIcon:                  ['Icon button for sharing via a channel (e.g. WhatsApp).', ['share', 'icon', 'social']],
  Tag:                        ['Small colored label for status annotation.', ['tag', 'badge', 'label', 'status']],
  // ── Form
  BaseInput:                  ['Form field wrapper with label, hint, and error slot.', ['form', 'input', 'field']],
  Button:                     ['Action button with primary/secondary/destructive variants.', ['button', 'action', 'form']],
  CardInput:                  ['Credit card number input with card type detection.', ['input', 'payment', 'card', 'form']],
  Checkbox:                   ['Single checkbox input.', ['checkbox', 'form', 'input']],
  CheckboxesGroup:            ['Group of checkboxes with select-all support.', ['checkbox', 'form', 'group']],
  Criteria:                   ['Read-only pass/fail criteria indicator.', ['criteria', 'validation', 'form']],
  Input:                      ['Text input with icon, prefix, and password toggle.', ['input', 'text', 'form']],
  InputOption:                ['Tag-style input for adding multiple free-text values.', ['input', 'tags', 'form']],
  PhoneInput:                 ['Phone number input with country code selector.', ['input', 'phone', 'form']],
  Radio:                      ['Single radio button input.', ['radio', 'form', 'input']],
  RadioGroup:                 ['Group of radio buttons.', ['radio', 'form', 'group']],
  RangeInput:                 ['Dual numeric input for a min/max range.', ['input', 'range', 'form']],
  Select:                     ['Dropdown with single/multi select, filtering, and async search.', ['select', 'dropdown', 'form', 'filter']],
  Option:                     ['Single option item inside Select.', ['select', 'option', 'form']],
  GroupOptions:               ['Labeled group of options inside Select.', ['select', 'group', 'form']],
  Toggle:                     ['On/off toggle switch.', ['toggle', 'switch', 'form']],
  LinkInput:                  ['Input for social or custom links with platform selector.', ['input', 'link', 'social', 'form']],
  TextArea:                   ['Multi-line text input with auto-resize.', ['textarea', 'input', 'form']],
  Calendar:                   ['Standalone date or date-range calendar picker.', ['calendar', 'date', 'picker', 'form']],
  DatePicker:                 ['Date or range picker input with popover calendar.', ['datepicker', 'date', 'form']],
  Slider:                     ['Range or single value slider.', ['slider', 'range', 'form']],
  SectionItem:                ['Settings row with title, toggle, and action slot.', ['settings', 'form', 'toggle']],
  SelectOptions:              ['Visual option picker in grid or list layout.', ['select', 'options', 'form', 'grid']],
  SingleFileUpload:           ['Single file upload with preview and size limit.', ['upload', 'file', 'form']],
  MultipleUploadFile:         ['Multiple file upload with preview grid.', ['upload', 'file', 'form', 'gallery']],
  NumberInput:                ['Numeric input with increment/decrement buttons.', ['input', 'number', 'form']],
  ComplexCalendar:            ['Full calendar panel with range selection and shortcuts.', ['calendar', 'date', 'range', 'form']],
  ComplexDatePicker:          ['Date range picker input with label and format options.', ['datepicker', 'date', 'range', 'form']],
  ModalCropper:               ['Modal-based image cropper.', ['upload', 'image', 'crop', 'modal']],
  Cropper:                    ['Inline image cropper.', ['upload', 'image', 'crop']],
  EmojiPicker:                ['Emoji selector popover input.', ['emoji', 'input', 'form']],
  TimePopup:                  ['Time picker popup.', ['time', 'picker', 'form']],
  TimePicker:                 ['Time picker input with popover clock.', ['time', 'picker', 'form']],
  // ── Media
  Avatar:                     ['User or business avatar in multiple sizes.', ['avatar', 'image', 'user']],
  Icon:                       ['SVG icon by name from the OrchidUI icon set.', ['icon', 'svg', 'media']],
  // ── Overlay
  Dropdown:                   ['Popover dropdown menu attached to a trigger.', ['dropdown', 'menu', 'overlay']],
  DropdownItem:               ['Single item row inside a Dropdown.', ['dropdown', 'menu', 'item']],
  Tooltip:                    ['Hover or click tooltip/popover.', ['tooltip', 'popover', 'overlay']],
  Modal:                      ['Dialog modal with header, body, and footer.', ['modal', 'dialog', 'overlay']],
  OcModalPage:                ['Full-screen modal page with back button.', ['modal', 'page', 'overlay']],
  ConfirmationModal:          ['Pre-styled confirm/delete/warning dialog.', ['modal', 'confirm', 'dialog', 'overlay']],
  Popper:                     ['Low-level Popper.js positioning wrapper.', ['overlay', 'popper', 'positioning']],
  SupportMenu:                ['Floating help/support menu with grouped links.', ['support', 'help', 'menu', 'overlay']],
  CopyTooltip:                ['Wrap any element to copy its value to clipboard.', ['copy', 'clipboard', 'tooltip']],
  WhiteList:                  ['Feature gate card shown when plan does not include a feature.', ['upgrade', 'gate', 'plan']],
  Theme:                      ['Wrap app to apply light/dark color mode.', ['theme', 'dark-mode', 'layout']],
  // ── FormBuilder
  FormBuilder:                ['Dynamic form renderer from a JSON schema.', ['form', 'builder', 'dynamic', 'schema']],
  // ── DataTable
  DataTable:                  ['Data table with filtering, pagination, search, and bulk actions.', ['table', 'data', 'filter', 'pagination', 'crud']],
  FilterSearch:               ['Search input inside DataTable filter toolbar.', ['filter', 'search', 'table']],
  FilterSearchFor:            ['Active filter chips with remove controls.', ['filter', 'search', 'table']],
  FilterForm:                 ['Filter form panel driven by JSON schema, used inside DataTable.', ['filter', 'form', 'table']],
  // ── Elements
  Draggable:                  ['Drag-and-drop wrapper for reorderable lists.', ['drag', 'drop', 'sort', 'list']],
  DraggableList:              ['Styled draggable list with icon and action slots.', ['drag', 'drop', 'sort', 'list']],
  // ── StoreDesign
  ThumbnailTheme:             ['Theme selection card with preview and activate/publish actions.', ['theme', 'store', 'design']],
  ThumbnailSection:           ['Section template card with preview and add action.', ['section', 'store', 'design']],
  SubPlanCard:                ['Subscription plan tier card listing features.', ['plan', 'subscription', 'pricing']],
  // ── Dashboard
  LineChart:                  ['Time-series line chart for trend visualization.', ['chart', 'line', 'analytics', 'dashboard']],
  PieChart:                   ['Pie or donut chart for proportional data.', ['chart', 'pie', 'analytics', 'dashboard']],
  BarChart:                   ['Bar chart for comparing values across categories.', ['chart', 'bar', 'analytics', 'dashboard']],
  BarRaceChart:               ['Animated bar race chart for changing rankings.', ['chart', 'animated', 'analytics', 'dashboard']],
  Card:                       ['Dashboard card container with title and content.', ['card', 'dashboard']],
  OcOverviewPieChart:         ['Pie chart for overview/summary widgets.', ['chart', 'pie', 'overview', 'dashboard']],
  OverviewMonthlyBarChart:    ['Monthly bar chart for overview reporting.', ['chart', 'bar', 'overview', 'dashboard']],
  ColorPicker:                ['Color picker input with hex/rgb support.', ['color', 'picker', 'input']],
  TextEditor:                 ['Rich text (WYSIWYG) editor.', ['editor', 'richtext', 'wysiwyg', 'input']],
  ColorPickerPopup:           ['Popover color picker for inline color selection.', ['color', 'picker', 'popover']],
  OnboardingProgressbar:      ['Progress bar for onboarding completion.', ['progress', 'onboarding', 'dashboard']],
  CodeBlock:                  ['Syntax-highlighted code block.', ['code', 'syntax', 'display']],
  LottieAnimation:            ['Renders a Lottie JSON animation.', ['animation', 'lottie', 'media']],
}

// Helpers to read from COMPONENT_META
const DESCRIPTIONS = Object.fromEntries(Object.entries(COMPONENT_META).map(([k, [d]]) => [k, d]))
const TAGS         = Object.fromEntries(Object.entries(COMPONENT_META).map(([k, [, t]]) => [k, t]))

// ── Alias resolver ──────────────────────────────────────────────────────────

function resolveAlias(importPath, aliases) {
  for (const [alias, replacement] of Object.entries(aliases)) {
    if (importPath === alias || importPath.startsWith(alias + '/')) {
      return importPath.replace(alias, replacement)
    }
  }
  return importPath
}

function resolvePath(importPath, fromDir, aliases) {
  const aliased = resolveAlias(importPath, aliases)
  const resolved = path.isAbsolute(aliased) ? aliased : path.resolve(fromDir, aliased)
  if (!path.extname(resolved) && fs.existsSync(resolved + '/index.js')) {
    return resolved + '/index.js'
  }
  return resolved
}

// ── JS barrel file parser ───────────────────────────────────────────────────

function parseBarrelFile(filePath, aliases, visited = new Set()) {
  if (visited.has(filePath)) return []
  visited.add(filePath)
  if (!fs.existsSync(filePath)) return []

  const content = fs.readFileSync(filePath, 'utf-8')
  const dir = path.dirname(filePath)
  const results = []
  const vueImports = {}

  for (const m of content.matchAll(/import\s+(\w+)\s+from\s+['"]([^'"]+\.vue)['"]/g)) {
    vueImports[m[1]] = resolvePath(m[2], dir, aliases)
  }

  for (const m of content.matchAll(/const\s+(\w+)\s*=\s*defineAsyncComponent[\s\S]*?import\(['"]([^'"]+\.vue)['"]\)/g)) {
    vueImports[m[1]] = resolvePath(m[2], dir, aliases)
  }

  for (const m of content.matchAll(/export\s+\*\s+from\s+['"]([^'"]+)['"]/g)) {
    if (m[1].endsWith('.vue')) continue
    const nested = resolvePath(m[1], dir, aliases)
    if (nested.endsWith('.js')) results.push(...parseBarrelFile(nested, aliases, visited))
  }

  const exportedNames = new Set()
  for (const m of content.matchAll(/export\s+\{([^}]+)\}/g)) {
    for (const part of m[1].split(',')) {
      const name = part.replace(/\/\/[^\n]*/g, '').trim()
      if (name) exportedNames.add(name.split(/\s+as\s+/).pop().trim())
    }
  }

  for (const [name, vuePath] of Object.entries(vueImports)) {
    if (exportedNames.size === 0 || exportedNames.has(name)) {
      results.push({ exportName: name, vueFilePath: vuePath })
    }
  }

  return results
}

// ── Index.js parser ─────────────────────────────────────────────────────────

function parseIndexFile(indexPath, aliases) {
  const content = fs.readFileSync(indexPath, 'utf-8')
  const dir = path.dirname(indexPath)
  const results = []
  const vueImports = {}

  for (const m of content.matchAll(/import\s+(\w+)\s+from\s+['"]([^'"]+\.vue)['"]/g)) {
    vueImports[m[1]] = resolvePath(m[2], dir, aliases)
  }

  for (const m of content.matchAll(/const\s+(\w+)\s*=\s*defineAsyncComponent[\s\S]*?import\(['"]([^'"]+\.vue)['"]\)/g)) {
    vueImports[m[1]] = resolvePath(m[2], dir, aliases)
  }

  for (const m of content.matchAll(/export\s+\*\s+from\s+['"]([^'"]+)['"]/g)) {
    if (m[1].endsWith('.vue')) continue
    const barrelPath = resolvePath(m[1], dir, aliases)
    if (barrelPath.endsWith('.js')) results.push(...parseBarrelFile(barrelPath, aliases))
  }

  const exportedNames = new Set()
  for (const m of content.matchAll(/export\s+\{([^}]+)\}/g)) {
    for (const part of m[1].split(',')) {
      const name = part.replace(/\/\/[^\n]*/g, '').trim()
      if (name) exportedNames.add(name.split(/\s+as\s+/).pop().trim())
    }
  }

  for (const [name, vuePath] of Object.entries(vueImports)) {
    if (exportedNames.size === 0 || exportedNames.has(name)) {
      results.push({ exportName: name, vueFilePath: vuePath })
    }
  }

  return results
}

// ── Known OrchidUI component sets (for import resolution) ───────────────────

const CORE_COMPONENT_NAMES = new Set([
  'Table','TableHeader','TableCell','TableCellContent','TableLink','ExpandingTable',
  'ExpandingTableRow','ExpandingHeaderRow','Pagination','PrevNext','PaginationNumber',
  'Overview','OverviewIcon','OverviewItem','CustomerCard','TransferSummary','ListItem',
  'ListUrl','ListDetail','InfoCard','ProgressBar','FloatContent','HorizontalProgressbar',
  'OcOnboardingListItem','OcOnboardingRecap','OcAccountVerificationContent',
  'OcAccountVerificationBox','NewTable','OcRowItemData','Accordion','OnboardingAccordion',
  'OnboardingProductOption','Tabs','PaymentTab','Steps','Step','Variants','Variant',
  'SwitchTabs','Header','SubHeader','HeaderLeft','HeaderCenter','HeaderRight','TabToSelect',
  'Checklist','PageTitle','PrimaryActions','PageTitleRight','Sidebar','SidebarSubmenu',
  'AccountSetup','SidebarHead','SideBarMenu','SidebarSubMenuItem','SidebarFooter',
  'SidebarFeatureBanners','AccountSetupProgress','SubSidebar','EmptyPage','AdditionalContent',
  'InfoCardButton','Skeleton','FeatureOverviewCard','SandboxBanner','TopBanner','Box',
  'OcSection','AuthenticationOption','VerificationOption','Chip','Snackbar','Banner',
  'ShareIcon','Tag','BaseInput','Button','CardInput','Checkbox','CheckboxesGroup','Criteria',
  'Input','InputOption','PhoneInput','Radio','RadioGroup','RangeInput','Select','Option',
  'GroupOptions','Toggle','LinkInput','TextArea','Calendar','DatePicker','Slider',
  'SectionItem','SelectOptions','SingleFileUpload','MultipleUploadFile','NumberInput',
  'Avatar','Icon','Dropdown','DropdownItem','Tooltip','Modal','OcModalPage',
  'ConfirmationModal','Popper','SupportMenu','CopyTooltip','WhiteList','Theme','FormBuilder',
  'DataTable','FilterSearch','FilterSearchFor','FilterForm','ComplexCalendar',
  'ComplexDatePicker','ModalCropper','Cropper','Draggable','DraggableList','EmojiPicker',
  'ThumbnailTheme','ThumbnailSection','SubPlanCard','TimePopup','TimePicker',
])

const DASHBOARD_COMPONENT_NAMES = new Set([
  'LineChart','PieChart','BarChart','BarRaceChart','Card','OcOverviewPieChart',
  'OverviewMonthlyBarChart','ColorPicker','TextEditor','ColorPickerPopup',
  'OnboardingProgressbar','CodeBlock','LottieAnimation',
])

// ── Story parser ─────────────────────────────────────────────────────────────

function extractBalanced(str, startPos) {
  let depth = 0
  let i = startPos
  while (i < str.length) {
    if (str[i] === '{') depth++
    else if (str[i] === '}') {
      depth--
      if (depth === 0) return str.slice(startPos, i + 1)
    }
    i++
  }
  return null
}

function extractBacktickTemplate(block) {
  const idx = block.search(/template\s*:\s*`/)
  if (idx === -1) return null

  const start = block.indexOf('`', idx) + 1
  let i = start
  const result = []

  while (i < block.length) {
    const ch = block[i]
    if (ch === '`') break
    if (ch === '\\') {
      result.push(ch, block[i + 1] ?? '')
      i += 2
      continue
    }
    if (ch === '$' && block[i + 1] === '{') {
      result.push('${')
      i += 2
      let depth = 1
      while (i < block.length && depth > 0) {
        if (block[i] === '{') depth++
        else if (block[i] === '}') depth--
        if (depth > 0) result.push(block[i])
        i++
      }
      result.push('}')
      continue
    }
    result.push(ch)
    i++
  }

  return result.join('').trim()
}

// ── Vue 3 SFC code generator ─────────────────────────────────────────────────

function camelToKebab(str) {
  return str.replace(/([A-Z])/g, (m) => `-${m.toLowerCase()}`)
}

function serializeValue(value) {
  if (typeof value === 'string') return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`
  if (typeof value === 'boolean' || typeof value === 'number') return String(value)
  if (Array.isArray(value)) return `[${value.map(serializeValue).join(', ')}]`
  if (value !== null && typeof value === 'object') {
    const entries = Object.entries(value).map(([k, v]) => `${k}: ${serializeValue(v)}`)
    return `{ ${entries.join(', ')} }`
  }
  return String(value)
}

function propToAttr(key, value) {
  const attr = camelToKebab(key)
  if (typeof value === 'string') return `${attr}="${value}"`
  return `:${attr}="${serializeValue(value).replace(/"/g, "'")}"`
}

function stripThemeWrapper(template) {
  const t = template.trim()
  if (!t.startsWith('<Theme')) return t
  const openEnd = t.indexOf('>') + 1
  const closeStart = t.lastIndexOf('</Theme>')
  if (closeStart === -1) return t
  const inner = t.slice(openEnd, closeStart).trim()
  // Dedent: remove leading spaces common to all non-empty lines
  const lines = inner.split('\n')
  const minIndent = lines
    .filter(l => l.trim())
    .reduce((min, l) => Math.min(min, l.match(/^ */)[0].length), Infinity)
  return lines.map(l => l.slice(minIndent)).join('\n').trim()
}

function expandArgsInTemplate(template, args) {
  let result = template
  const validArgs = Object.fromEntries(
    Object.entries(args ?? {}).filter(([, v]) => v !== '' && v !== null && v !== undefined)
  )

  // Replace v-bind="args" with individual prop attrs
  result = result.replace(/\s+v-bind="args"/g, () => {
    if (!Object.keys(validArgs).length) return ''
    return '\n' + Object.entries(validArgs).map(([k, v]) => `  ${propToAttr(k, v)}`).join('\n')
  })

  // Replace :prop="args.propName" → :prop="value"
  result = result.replace(/:[\w-]+=["']args\.(\w+)["']/g, (match, key) => {
    if (key in args) {
      const attr = match.split('=')[0]
      return `${attr}="${serializeValue(args[key]).replace(/"/g, "'")}"`
    }
    return match
  })

  // Replace bare args.propName in expressions
  for (const [key, value] of Object.entries(validArgs)) {
    result = result.replace(new RegExp(`\\bargs\\.${key}\\b`, 'g'), serializeValue(value))
  }

  return result
}

function extractSetupState(storyObj) {
  const vueImports = []
  const stateLines = []

  const setupMatch = storyObj.match(/setup\s*\(\s*\)\s*\{([\s\S]*?)\breturn\b/)
  if (!setupMatch) return { vueImports, stateLines }

  const body = setupMatch[1]

  for (const m of body.matchAll(/const\s+(\w+)\s*=\s*(ref|reactive|computed)\(([^)]*)\)/g)) {
    const [, varName, fn, init] = m
    stateLines.push(`const ${varName} = ${fn}(${init})`)
    if (!vueImports.includes(fn)) vueImports.push(fn)
  }

  return { vueImports, stateLines }
}

function getUsedOrchidComponents(template) {
  const used = { core: [], dashboard: [] }
  for (const m of template.matchAll(/<([A-Z][a-zA-Z]+)[\s/>]/g)) {
    const name = m[1]
    if (name === 'Theme') continue
    if (CORE_COMPONENT_NAMES.has(name) && !used.core.includes(name)) used.core.push(name)
    if (DASHBOARD_COMPONENT_NAMES.has(name) && !used.dashboard.includes(name)) used.dashboard.push(name)
  }
  return used
}

function buildSFCCode(storyObj, args) {
  const rawTemplate = extractBacktickTemplate(storyObj)
  if (!rawTemplate) return null

  let template = stripThemeWrapper(rawTemplate)
  template = expandArgsInTemplate(template, args)

  const { core, dashboard } = getUsedOrchidComponents(template)
  const { vueImports, stateLines } = extractSetupState(storyObj)

  const scriptLines = []
  if (vueImports.length) scriptLines.push(`import { ${vueImports.join(', ')} } from 'vue'`)
  if (core.length) scriptLines.push(`import { ${core.join(', ')} } from '@orchidui/core'`)
  if (dashboard.length) scriptLines.push(`import { ${dashboard.join(', ')} } from '@orchidui/dashboard'`)
  if (stateLines.length) {
    scriptLines.push('')
    scriptLines.push(...stateLines)
  }

  const parts = []
  if (scriptLines.length) {
    parts.push(`<script setup>\n${scriptLines.join('\n')}\n</script>`)
  }
  parts.push(`<template>\n${template}\n</template>`)

  return parts.join('\n\n')
}

function parseStoryOptions(vueFilePath) {
  const storyPath = vueFilePath.replace(/\.vue$/, '.stories.js')
  if (!fs.existsSync(storyPath)) return {}

  const content = fs.readFileSync(storyPath, 'utf-8')
  const propOptions = {}

  for (const m of content.matchAll(/(\w+)\s*:\s*\{[^{}]*options\s*:\s*(\[[^\]]*\])/g)) {
    const propName = m[1]
    if (propName === 'argTypes') continue
    try {
      const options = new Function('return ' + m[2])()
      if (Array.isArray(options) && options.length > 0) {
        propOptions[propName] = [...new Set(options.map(String).filter(Boolean))]
      }
    } catch { /* skip */ }
  }

  return propOptions
}

function parseStoryExamples(vueFilePath) {
  const storyPath = vueFilePath.replace(/\.vue$/, '.stories.js')
  if (!fs.existsSync(storyPath)) return []

  const content = fs.readFileSync(storyPath, 'utf-8')
  const examples = []

  for (const m of content.matchAll(/export\s+const\s+(\w+)\s*=\s*\{/g)) {
    const name = m[1]
    const storyStart = m.index + m[0].length - 1
    const storyObj = extractBalanced(content, storyStart)
    if (!storyObj) continue

    // Extract args/props
    let props = null
    let args = {}
    const argsIdx = storyObj.search(/\bargs\s*:\s*\{/)
    if (argsIdx !== -1) {
      const bracePos = storyObj.indexOf('{', argsIdx)
      const argsStr = extractBalanced(storyObj, bracePos)
      if (argsStr) {
        try {
          args = new Function('return ' + argsStr)() ?? {}
          if (args && typeof args === 'object') {
            const cleaned = Object.fromEntries(
              Object.entries(args).filter(([, v]) => v !== '' && v !== null && v !== undefined)
            )
            if (Object.keys(cleaned).length > 0) props = cleaned
          }
        } catch { args = {} }
      }
    }

    // Build Vue 3 SFC code
    const code = buildSFCCode(storyObj, args)

    if (code || props) {
      const ex = { name }
      if (props) ex.props = props
      if (code) ex.code = code
      examples.push(ex)
    }
  }

  return examples
}

function parseStoryRelatedComponents(vueFilePath, primaryComponent) {
  const storyPath = vueFilePath.replace(/\.vue$/, '.stories.js')
  if (!fs.existsSync(storyPath)) return []

  const content = fs.readFileSync(storyPath, 'utf-8')
  const related = new Set()

  for (const m of content.matchAll(/import\s*\{([^}]+)\}\s*from\s*['"]@\/orchidui-(?:core|dashboard)['"]/g)) {
    for (const raw of m[1].split(',')) {
      const name = raw.trim()
      if (name && name !== primaryComponent && name !== 'Theme') {
        related.add(name)
      }
    }
  }

  return [...related].sort()
}

// ── Storybook URL generator ──────────────────────────────────────────────────

function storybookUrl(vueFilePath, packageRoot) {
  const rel = path.relative(packageRoot, vueFilePath)
  const withoutExt = rel.replace(/\.vue$/, '')
  const slug = withoutExt.split(path.sep).join('-').toLowerCase()
  return `https://orchidui.vercel.app/storybook/?path=/docs/${slug}--docs`
}

// ── Doc formatter (3-layer) ──────────────────────────────────────────────────

function buildProps(doc, storyOptions) {
  const props = {}
  for (const prop of doc.props ?? []) {
    const storyVals = storyOptions[prop.name]
    const values = prop.values?.length > 0 ? prop.values : storyVals?.length > 0 ? storyVals : null

    let type = 'any'
    if (prop.type) {
      type = prop.type.name === 'union'
        ? prop.type.elements?.map((e) => e.name).join('|') ?? prop.type.name
        : prop.type.name
    }
    if (values) type = 'enum'

    const p = { type, required: prop.required || false }
    if (prop.defaultValue?.value !== undefined && prop.defaultValue.value !== 'undefined') {
      p.default = prop.defaultValue.value.replace(/^'(.*)'$/, '$1')
    }
    if (values) p.values = values
    if (prop.description) p.description = prop.description

    props[prop.name] = p
  }
  return props
}

function buildRules(props) {
  const rules = []
  const required = Object.entries(props).filter(([, p]) => p.required).map(([n]) => n)
  if (required.length) rules.push(`Required props: ${required.join(', ')}`)
  for (const [name, prop] of Object.entries(props)) {
    if (prop.type === 'enum') rules.push(`"${name}" must be one of: ${prop.values.join(', ')}`)
  }
  return rules
}

// Layer 1 — meta.json: super lightweight, always sent (~100–200 tokens)
function formatMeta(exportName, props) {
  const lightProps = {}
  for (const [name, p] of Object.entries(props)) {
    lightProps[name] = p.required ? `${p.type} (required)` : p.type
  }
  return {
    name: exportName,
    description: DESCRIPTIONS[exportName] ?? `OrchidUI ${exportName} component.`,
    props: lightProps,
    events: [],  // filled by caller
    slots: [],   // filled by caller
  }
}

// Layer 2 — schema.json: full prop detail + rules, on-demand
function formatSchema(exportName, vueFilePath, packageRoot, props, doc, rules, relatedComponents) {
  const events = {}
  for (const e of doc.events ?? []) {
    events[e.name] = {
      description: e.description || '',
      ...(e.type ? { type: e.type.names?.join('|') ?? e.type.name } : {})
    }
  }
  const slots = {}
  for (const s of doc.slots ?? []) {
    slots[s.name] = {
      description: s.description || '',
      ...(s.bindings?.length > 0
        ? { bindings: s.bindings.map((b) => ({ name: b.name, ...(b.type?.name ? { type: b.type.name } : {}) })) }
        : {})
    }
  }
  return {
    name: exportName,
    storybook: storybookUrl(vueFilePath, packageRoot),
    props,
    events,
    slots,
    rules,
    relatedComponents,
  }
}

// Layer 3 — examples.json: code + props, lazy load
function formatExamples(exportName, examples) {
  return { name: exportName, examples }
}

// ── Build ────────────────────────────────────────────────────────────────────

async function buildPackageDocs(label, indexPath, aliases, outputFile, packageRoot) {
  console.log(`\nBuilding ${label}...`)

  const rawEntries = parseIndexFile(indexPath, aliases)
  const seen = new Set()
  const entries = rawEntries.filter(({ exportName }) => {
    if (seen.has(exportName)) return false
    seen.add(exportName)
    return true
  })
  console.log(`  Found ${entries.length} exported components`)

  const indexComponents = []
  let success = 0
  let failed = 0

  for (const { exportName, vueFilePath } of entries) {
    if (!fs.existsSync(vueFilePath)) {
      console.warn(`  ✗ ${exportName}: file not found`)
      failed++
      continue
    }

    try {
      const raw = await parse(vueFilePath, { alias: aliases })
      const storyOptions = parseStoryOptions(vueFilePath)
      const examples = parseStoryExamples(vueFilePath)
      const relatedComponents = parseStoryRelatedComponents(vueFilePath, exportName)

      const props = buildProps(raw, storyOptions)
      const rules = buildRules(props)

      // Layer 1 — meta
      const meta = formatMeta(exportName, props)
      meta.events = (raw.events ?? []).map((e) => e.name)
      meta.slots = (raw.slots ?? []).map((s) => s.name)

      // Layer 2 — schema
      const schema = formatSchema(exportName, vueFilePath, packageRoot, props, raw, rules, relatedComponents)

      // Layer 3 — examples
      const examplesDoc = formatExamples(exportName, examples)

      fs.writeFileSync(path.join(COMPONENTS_DIR, `${exportName}.meta.json`), JSON.stringify(meta))
      fs.writeFileSync(path.join(COMPONENTS_DIR, `${exportName}.schema.json`), JSON.stringify(schema))
      fs.writeFileSync(path.join(COMPONENTS_DIR, `${exportName}.examples.json`), JSON.stringify(examplesDoc))

      // Slim index entry — name + description + tags only (paths are deterministic)
      indexComponents.push({
        name: exportName,
        description: meta.description,
        tags: TAGS[exportName] ?? [],
      })

      console.log(`  ✓ ${exportName}`)
      success++
    } catch (err) {
      console.warn(`  ✗ ${exportName}: ${err.message}`)
      failed++
    }
  }

  const index = {
    version: '1.0',
    library: label === 'orchid-core' ? '@orchidui/core' : '@orchidui/dashboard',
    generatedAt: new Date().toISOString().split('T')[0],
    total: indexComponents.length,
    components: indexComponents
  }

  fs.writeFileSync(outputFile, JSON.stringify(index))
  console.log(`  → ${outputFile} (${success} components, ${failed} failed)`)
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  fs.mkdirSync(COMPONENTS_DIR, { recursive: true })

  await buildPackageDocs(
    'orchid-core',
    path.join(CORE_ROOT, 'index.js'),
    CORE_ALIASES,
    path.join(OUTPUT_DIR, 'orchid-core.json'),
    CORE_ROOT
  )

  await buildPackageDocs(
    'orchid-dashboard',
    path.join(DASHBOARD_ROOT, 'index.js'),
    DASHBOARD_ALIASES,
    path.join(OUTPUT_DIR, 'orchid-dashboard.json'),
    DASHBOARD_ROOT
  )

  console.log('\nDone.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
