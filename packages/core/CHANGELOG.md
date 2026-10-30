# Changelog

## 1.115.1

### Fixed

- **FloatContent**: a closed panel no longer stays on-screen when the consumer passes
  offset/sizing classes such as `!right-[16px] w-[566px]`. Previously the closed state
  relied on `right-[-999px] w-0`, which those classes outrank (via `!important`, or via
  Tailwind's source order for arbitrary values), leaving a blank full-height `z-50` block
  that covered the page and swallowed clicks. The closed state is now applied as an inline
  `!important` `visibility: hidden` / `pointer-events: none` / `transform` slide, plus
  `inert` and `aria-hidden`, and `right`/`left`/`width` are left entirely to the consumer.
  The open/close slide transition and the public API are unchanged.

  If you worked around this with `:class="{ '!right-[Npx]': isOpen }"`, you can move the
  offset back into the static `class` after upgrading. You don't have to: the conditional
  form keeps working.
