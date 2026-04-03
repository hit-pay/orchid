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

const DESCRIPTIONS = {
  Table: 'Renders tabular data with support for sorting, row selection, sticky columns, loading skeletons, and customizable cell slots.',
  TableHeader: 'A single table header cell supporting text or checkbox variants, sortable columns, and loading state.',
  TableCell: 'A single table body cell supporting variants like content, chip, datetime, icon, image, and checkbox.',
  TableCellContent: 'Renders a two-line content cell with a title and optional description, supporting links.',
  TableLink: 'Wraps table cell content in a router-link or anchor.',
  ExpandingTable: 'A tree-structured table that supports collapsible/expandable rows with nested data.',
  ExpandingTableRow: 'A single row within an ExpandingTable, supporting depth indentation and nested children.',
  ExpandingHeaderRow: 'The header row for an ExpandingTable component.',
  Pagination: 'Page navigation control with prev/next and numbered page buttons.',
  PrevNext: 'A single previous or next navigation button used within Pagination.',
  PaginationNumber: 'A single numbered page button used within Pagination.',
  Overview: 'A grouped set of OverviewItem cards displaying key metrics with icons.',
  OverviewIcon: 'A colored icon badge used inside OverviewItem.',
  OverviewItem: 'A single metric card showing a title, value, icon, and optional percentage change.',
  CustomerCard: 'Displays customer or beneficiary details in small, big, or float layout variants.',
  TransferSummary: 'Shows a summary of a money transfer including amount, fee, method, and FX rate.',
  ListItem: 'A versatile list row supporting timeline, webhook, payment, terminal, general, and accordion layouts.',
  ListUrl: 'Displays a labelled URL with an optional copy button.',
  ListDetail: 'A label-value pair row in horizontal or vertical alignment, with optional copy tooltip.',
  InfoCard: 'A content card with a title, optional loading state, hover effect, and header/footer slots.',
  ProgressBar: 'A step-based linear progress bar showing current step out of total steps.',
  FloatContent: 'A floating side panel (left or right) with title, description, and dropdown actions.',
  HorizontalProgressbar: 'A horizontal bar showing progress as a ratio of current to max value.',
  OcOnboardingListItem: 'An onboarding checklist row with a number badge, status, and action button.',
  OcOnboardingRecap: 'A collapsible recap card for onboarding sections, showing completed field values.',
  OcAccountVerificationContent: 'A page-level container for account verification steps with header, body, and footer slots.',
  OcAccountVerificationBox: 'A selectable verification option card with icon, description, and chips.',
  NewTable: 'A modern table component supporting row expansion, selection, loading, and named column slots.',
  OcRowItemData: 'A compact list of labeled data items, each optionally showing a chip, copy button, or icon.',
  Accordion: 'A collapsible section with a header and body, supporting animated expand/collapse.',
  OnboardingAccordion: 'An onboarding-styled accordion with a status variant (completed, error, pending, etc.).',
  OnboardingProductOption: 'A selectable product option card with image, title, and description.',
  Tabs: 'A horizontal or vertical tab bar for switching between named views.',
  PaymentTab: 'A styled tab selector for payment method tabs.',
  Steps: 'A step indicator showing progress through a multi-step flow.',
  Step: 'A single step indicator within a Steps component.',
  Variants: 'A group of selectable variant options, each with a label and icon.',
  Variant: 'A single selectable variant card with icon and label.',
  SwitchTabs: 'A segmented control for switching between a small set of options.',
  Header: 'The top-level application header shell.',
  SubHeader: 'A secondary header below the main header.',
  HeaderLeft: 'The left section of a Header component.',
  HeaderCenter: 'The center section of a Header with an optional back button and saved state.',
  HeaderRight: 'The right section of a Header with primary and secondary action buttons.',
  TabToSelect: 'A tab bar that triggers path changes, used inside the Header.',
  Checklist: 'A single checklist step item with an index number, label, and completion state.',
  PageTitle: 'A page-level title bar with back button, copy value, chip, and primary/secondary action buttons.',
  PrimaryActions: 'Renders primary action buttons or dropdowns within a PageTitle.',
  PageTitleRight: 'The right action area of a PageTitle with primary and secondary buttons.',
  Sidebar: 'The main application sidebar with expandable menus, logo, and footer slots.',
  SidebarSubmenu: 'An expandable submenu section within the Sidebar.',
  AccountSetup: 'An account setup progress widget shown inside the Sidebar.',
  SidebarHead: 'The header section of a Sidebar group.',
  SideBarMenu: 'A single menu item in the Sidebar, supporting badges, children, and expanded state.',
  SidebarSubMenuItem: 'A child menu item within a SidebarSubmenu.',
  SidebarFooter: 'The footer section of the Sidebar.',
  SidebarFeatureBanners: 'Promotional feature banners displayed at the bottom of the Sidebar.',
  AccountSetupProgress: 'A circular progress indicator for account setup completion shown in the Sidebar.',
  SubSidebar: 'A secondary sidebar for sub-navigation within a section.',
  EmptyPage: 'A placeholder page shown when a list or section has no data.',
  AdditionalContent: 'A flexible side panel showing customer info, overview items, payment methods, and action buttons.',
  InfoCardButton: 'A selectable card button showing a title, content, and optional chip or dropdown.',
  Skeleton: 'A loading placeholder that mimics content shape while data is loading.',
  FeatureOverviewCard: 'A card listing product features with icons, used in feature overview or upgrade pages.',
  SandboxBanner: 'A top banner indicating the user is in sandbox/test mode.',
  TopBanner: 'A dismissible top-of-page announcement or action-required banner.',
  Box: 'A clickable card box with an icon, title, description, and active state.',
  OcSection: 'A content section wrapper with an optional title and header-right slot.',
  AuthenticationOption: 'A selectable authentication method card with icon and active indicator.',
  VerificationOption: 'A selectable verification method card with icon, chip badge, and active state.',
  Chip: 'A small status or category badge with variants for color, style (background/transparent/outlined), icon, and close button.',
  Snackbar: 'A toast notification supporting floating and inline modes, colors, icons, and action buttons.',
  Banner: 'An inline notification banner with an icon, title, content, and optional dismiss button.',
  ShareIcon: 'An icon button for sharing via a specific channel (e.g. WhatsApp) with a tooltip.',
  Tag: 'A small colored label tag for status or category annotation.',
  BaseInput: 'A form field wrapper providing label, hint, error message, and tooltip slot.',
  Button: 'A primary action button with variants (primary, secondary, destructive), sizes, icons, and loading state.',
  CardInput: 'A credit card number input with card type detection and inline label support.',
  Checkbox: 'A single checkbox input with label, hint, error, and button-variant style.',
  CheckboxesGroup: 'A group of checkboxes with select-all support and vertical/horizontal alignment.',
  Criteria: 'A read-only criteria indicator showing a label with a pass/fail state.',
  Input: 'A standard text input with icon, prefix, inline label, password toggle, and validation support.',
  InputOption: 'A tag-style input that lets users add multiple free-text options.',
  PhoneInput: 'A phone number input with integrated country code selector.',
  Radio: 'A single radio button with label, hint, tooltip, and button-variant styles.',
  RadioGroup: 'A group of radio buttons with vertical/horizontal layout.',
  RangeInput: 'A dual numeric input for entering a min/max range.',
  Select: 'A dropdown selector supporting single/multi select, filtering, async search, and grouped options.',
  Option: 'A single option item used inside a Select dropdown.',
  GroupOptions: 'A labeled group of Option items within a Select dropdown.',
  Toggle: 'A on/off toggle switch with label and disabled state.',
  LinkInput: 'An input for entering a social or custom link with platform selector.',
  TextArea: 'A multi-line text input with auto-resize, label, hint, and error support.',
  Calendar: 'A standalone date or date-range calendar picker.',
  DatePicker: 'A date or date-range picker input with popover calendar, shortcuts, and format options.',
  Slider: 'A range or single value slider with configurable min, max, and step.',
  SectionItem: 'A settings row with a title, description, optional toggle, and action slot.',
  SelectOptions: 'A visual option picker in grid or list layout supporting text, icon, or image options.',
  SingleFileUpload: 'A file upload input for a single file with preview, size limit, and crop support.',
  MultipleUploadFile: 'A file upload input for multiple files with preview grid and size/count limits.',
  NumberInput: 'A numeric input with increment/decrement buttons.',
  ComplexCalendar: 'A full calendar panel with range selection, shortcuts, and submit/cancel actions.',
  ComplexDatePicker: 'A date range picker input using ComplexCalendar, with label and format options.',
  ModalCropper: 'A modal-based image cropper with upload and crop controls.',
  Cropper: 'An inline image cropper with optional replace functionality.',
  EmojiPicker: 'An emoji selector popover input.',
  TimePopup: 'A time picker popup component.',
  TimePicker: 'A time picker input with a popover clock and label support.',
  Avatar: 'A user or business avatar in multiple sizes and types (default, business, image).',
  Icon: 'Renders an SVG icon by name from the OrchidUI icon library.',
  Dropdown: 'A popover dropdown menu attached to a trigger element.',
  DropdownItem: 'A single item row within a Dropdown menu, supporting icon, text, and badges.',
  Tooltip: 'A hover or click tooltip/popover with configurable placement and content slot.',
  Modal: 'A dialog modal with header, body, footer, confirm/cancel buttons, and size variants.',
  OcModalPage: 'A full-screen modal page with optional back button and close icon.',
  ConfirmationModal: 'A pre-styled confirmation dialog for delete, success, warning, or question actions.',
  Popper: 'A low-level positioning wrapper using Popper.js for custom overlays.',
  SupportMenu: 'A floating support/help menu with grouped links and a bottom action bar.',
  CopyTooltip: 'Wraps any element to copy a value to clipboard and show a confirmation tooltip.',
  WhiteList: 'A feature gate card shown when a feature is unavailable for the user\'s plan.',
  Theme: 'Wraps the app to apply a color mode (light/dark) via CSS variables.',
  FormBuilder: 'A dynamic form renderer that builds form fields from a JSON schema with grid layout support.',
  DataTable: 'A full-featured data table with integrated filtering, search, pagination, column config, and bulk actions.',
  FilterSearch: 'The search input component used within DataTable\'s filter toolbar.',
  FilterSearchFor: 'Displays active search/filter query chips with remove controls.',
  FilterForm: 'A filter form panel driven by a JSON schema, used inside DataTable.',
  Draggable: 'A drag-and-drop wrapper that makes a list reorderable.',
  DraggableList: 'A styled draggable list with icon, title, action slots, and optional nested children.',
  ThumbnailTheme: 'A theme selection card with preview thumbnail, activate/customize/publish actions.',
  ThumbnailSection: 'A section template card with preview image and add/customize actions.',
  SubPlanCard: 'A subscription plan tier card listing features and a select action.',
  // Dashboard
  LineChart: 'A time-series line chart for visualizing trends over time.',
  PieChart: 'A pie or donut chart for showing proportional data.',
  BarChart: 'A bar chart for comparing values across categories.',
  BarRaceChart: 'An animated bar race chart showing changing rankings over time.',
  Card: 'A dashboard card container with a title and content area.',
  OcOverviewPieChart: 'A pie chart variant styled for overview/summary widgets.',
  OverviewMonthlyBarChart: 'A monthly bar chart for overview reporting widgets.',
  ColorPicker: 'A full color picker input with hex/rgb support.',
  TextEditor: 'A rich text editor (WYSIWYG) for formatted content input.',
  ColorPickerPopup: 'A popover color picker for inline color selection.',
  OnboardingProgressbar: 'A visual progress bar for onboarding completion tracking.',
  CodeBlock: 'A syntax-highlighted code block for displaying code snippets.',
  LottieAnimation: 'Renders a Lottie JSON animation.',
}

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

    // Extract template code
    const code = extractBacktickTemplate(storyObj)

    // Extract args/props
    let props = null
    const argsIdx = storyObj.search(/\bargs\s*:\s*\{/)
    if (argsIdx !== -1) {
      const bracePos = storyObj.indexOf('{', argsIdx)
      const argsStr = extractBalanced(storyObj, bracePos)
      if (argsStr) {
        try {
          const args = new Function('return ' + argsStr)()
          if (args && typeof args === 'object') {
            const cleaned = Object.fromEntries(
              Object.entries(args).filter(([, v]) => v !== '' && v !== null && v !== undefined)
            )
            if (Object.keys(cleaned).length > 0) props = cleaned
          }
        } catch { /* skip if args reference imported variables */ }
      }
    }

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

// ── Doc formatter ────────────────────────────────────────────────────────────

function formatDoc(doc, exportName, vueFilePath, packageRoot) {
  const storyOptions = parseStoryOptions(vueFilePath)
  const examples = parseStoryExamples(vueFilePath)
  const relatedComponents = parseStoryRelatedComponents(vueFilePath, exportName)

  const result = {
    name: exportName,
    storybook: storybookUrl(vueFilePath, packageRoot),
    props: {},
    events: {},
    slots: {},
    rules: [],
    examples,
    relatedComponents
  }

  for (const prop of doc.props ?? []) {
    const storyVals = storyOptions[prop.name]
    const values =
      prop.values?.length > 0 ? prop.values : storyVals?.length > 0 ? storyVals : null

    let type = 'any'
    if (prop.type) {
      type =
        prop.type.name === 'union'
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

    result.props[prop.name] = p
  }

  for (const e of doc.events ?? []) {
    result.events[e.name] = {
      description: e.description || '',
      ...(e.type ? { type: e.type.names?.join('|') ?? e.type.name } : {})
    }
  }

  for (const s of doc.slots ?? []) {
    result.slots[s.name] = {
      description: s.description || '',
      ...(s.bindings?.length > 0
        ? { bindings: s.bindings.map((b) => ({ name: b.name, ...(b.type?.name ? { type: b.type.name } : {}) })) }
        : {})
    }
  }

  const requiredProps = Object.entries(result.props)
    .filter(([, p]) => p.required)
    .map(([name]) => name)
  if (requiredProps.length > 0) {
    result.rules.push(`Required props: ${requiredProps.join(', ')}`)
  }
  for (const [name, prop] of Object.entries(result.props)) {
    if (prop.type === 'enum') {
      result.rules.push(`"${name}" must be one of: ${prop.values.join(', ')}`)
    }
  }

  return result
}

// ── Build ────────────────────────────────────────────────────────────────────

async function buildPackageDocs(label, indexPath, aliases, outputFile, packageRoot) {
  console.log(`\nBuilding ${label}...`)

  const entries = parseIndexFile(indexPath, aliases)
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
      const doc = formatDoc(raw, exportName, vueFilePath, packageRoot)

      // Write individual component file
      const componentFile = path.join(COMPONENTS_DIR, `${exportName}.json`)
      fs.writeFileSync(componentFile, JSON.stringify(doc, null, 2))

      // Add to slim index
      indexComponents.push({
        name: exportName,
        description: DESCRIPTIONS[exportName] ?? `OrchidUI ${exportName} component.`,
        detail: `/docs/components/${exportName}.json`
      })

      console.log(`  ✓ ${exportName}`)
      success++
    } catch (err) {
      console.warn(`  ✗ ${exportName}: ${err.message}`)
      failed++
    }
  }

  // Write slim index
  const index = {
    version: '1.0',
    library: label === 'orchid-core' ? '@orchidui/core' : '@orchidui/dashboard',
    generatedAt: new Date().toISOString().split('T')[0],
    total: indexComponents.length,
    components: indexComponents
  }

  fs.writeFileSync(outputFile, JSON.stringify(index, null, 2))
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
