<template>
  <section class="w-full">
    <div class="grid gap-3 md:p-8 rounded bg-oc-bg-dark">
      <h2>Color Primary</h2>
      <div class="w-full grid grid-cols-3 md:grid-cols-8 gap-3">
        <div>
          <div class="h-[50px] bg-oc-primary-50-tr rounded border"></div>
          oc-primary-50-tr
        </div>
        <div>
          <div class="h-[50px] bg-oc-primary-50 rounded border"></div>
          oc-primary-50
        </div>
        <div>
          <div class="h-[50px] bg-oc-primary-100 rounded border"></div>
          primary-100
        </div>
        <div>
          <div class="h-[50px] bg-oc-primary-200 rounded border"></div>
          primary-200
        </div>
        <div>
          <div class="h-[50px] bg-oc-primary-300 rounded border"></div>
          primary-300
        </div>
        <div>
          <div class="h-[50px] bg-oc-primary-400 rounded border"></div>
          primary-400
        </div>
        <div>
          <div class="h-[50px] bg-oc-primary-500 rounded border"></div>
          primary-500
        </div>
      </div>

      <h2>Color Background</h2>
      <div class="w-full grid md:grid-cols-8 gap-3">
        <div class="h-[50px] bg-oc-bg-light rounded border"></div>
        <div class="h-[50px] bg-oc-bg-dark rounded border"></div>
      </div>

      <h2>Color Text</h2>
      <div class="w-full grid grid-cols-3 md:grid-cols-8 gap-3">
        <div class="h-[50px] bg-oc-text-100 rounded border"></div>
        <div class="h-[50px] bg-oc-text-200 rounded border"></div>
        <div class="h-[50px] bg-oc-text-300 rounded border"></div>
        <div class="h-[50px] bg-oc-text-400 rounded border"></div>
        <div class="h-[50px] bg-oc-text-500 rounded border"></div>
      </div>

      <h2>Color Gray</h2>
      <div class="w-full grid grid-cols-3 md:grid-cols-8 gap-3">
        <div class="h-[50px] bg-oc-gray-10 rounded border"></div>
        <div class="h-[50px] bg-oc-gray-50 rounded border"></div>
        <div class="h-[50px] bg-oc-gray-100 rounded border"></div>
        <div class="h-[50px] bg-oc-gray-200 rounded border"></div>
        <div class="h-[50px] bg-oc-gray-300 rounded border"></div>
        <div class="h-[50px] bg-oc-gray-400 rounded border"></div>
        <div class="h-[50px] bg-oc-gray-500 rounded border"></div>
        <div class="h-[50px] bg-oc-gray-600 rounded border"></div>
        <div class="h-[50px] bg-oc-gray-700 rounded border"></div>
        <div class="h-[50px] bg-oc-gray-800 rounded border"></div>
        <div class="h-[50px] bg-oc-gray-900 rounded border"></div>
      </div>

      <h2>Color Accent 1 (Dark Blue)</h2>
      <div class="w-full grid grid-cols-3 md:grid-cols-8 gap-3">
        <div class="h-[50px] bg-oc-accent-1-50-tr rounded border"></div>
        <div class="h-[50px] bg-oc-accent-1-50 rounded border"></div>
        <div class="h-[50px] bg-oc-accent-1-100 rounded border"></div>
        <div class="h-[50px] bg-oc-accent-1-200 rounded border"></div>
        <div class="h-[50px] bg-oc-accent-1-300 rounded border"></div>
        <div class="h-[50px] bg-oc-accent-1-400 rounded border"></div>
        <div class="h-[50px] bg-oc-accent-1-500 rounded border"></div>
        <div class="h-[50px] bg-oc-accent-1-600 rounded border"></div>
      </div>
      <h2>Color Accent 2 (Purple)</h2>
      <div class="w-full grid grid-cols-3 md:grid-cols-8 gap-3">
        <div class="h-[50px] bg-oc-accent-2-50-tr rounded border"></div>
        <div class="h-[50px] bg-oc-accent-2-50 rounded border"></div>
        <div class="h-[50px] bg-oc-accent-2-100 rounded border"></div>
        <div class="h-[50px] bg-oc-accent-2-200 rounded border"></div>
        <div class="h-[50px] bg-oc-accent-2-300 rounded border"></div>
        <div class="h-[50px] bg-oc-accent-2-400 rounded border"></div>
        <div class="h-[50px] bg-oc-accent-2-500 rounded border"></div>
      </div>
      <h2>Color Accent 3 (Red)</h2>
      <div class="w-full grid grid-cols-3 md:grid-cols-8 gap-3">
        <div class="h-[50px] bg-oc-accent-3-50-tr rounded border"></div>
        <div class="h-[50px] bg-oc-accent-3-50 rounded border"></div>
        <div class="h-[50px] bg-oc-accent-3-100 rounded border"></div>
        <div class="h-[50px] bg-oc-accent-3-200 rounded border"></div>
        <div class="h-[50px] bg-oc-accent-3-300 rounded border"></div>
        <div class="h-[50px] bg-oc-accent-3-400 rounded border"></div>
        <div class="h-[50px] bg-oc-accent-3-500 rounded border"></div>
      </div>
      <h2>Color Success</h2>
      <div class="w-full grid grid-cols-3 md:grid-cols-8 gap-3">
        <div class="h-[50px] bg-oc-success-50-tr rounded border"></div>
        <div class="h-[50px] bg-oc-success-50 rounded border"></div>
        <div class="h-[50px] bg-oc-success-100 rounded border"></div>
        <div class="h-[50px] bg-oc-success-200 rounded border"></div>
        <div class="h-[50px] bg-oc-success-300 rounded border"></div>
        <div class="h-[50px] bg-oc-success-400 rounded border"></div>
        <div class="h-[50px] bg-oc-success-500 rounded border"></div>
      </div>
      <h2>Color Warning</h2>
      <div class="w-full grid grid-cols-3 md:grid-cols-8 gap-3">
        <div class="h-[50px] bg-oc-warning-50-tr rounded border"></div>
        <div class="h-[50px] bg-oc-warning-50 rounded border"></div>
        <div class="h-[50px] bg-oc-warning-100 rounded border"></div>
        <div class="h-[50px] bg-oc-warning-200 rounded border"></div>
        <div class="h-[50px] bg-oc-warning-300 rounded border"></div>
        <div class="h-[50px] bg-oc-warning-400 rounded border"></div>
        <div class="h-[50px] bg-oc-warning-500 rounded border"></div>
      </div>
      <h2>Color Error</h2>
      <div class="w-full grid grid-cols-3 md:grid-cols-8 gap-3">
        <div class="h-[50px] bg-oc-error-50-tr rounded border"></div>
        <div class="h-[50px] bg-oc-error-50 rounded border"></div>
        <div class="h-[50px] bg-oc-error-100 rounded border"></div>
        <div class="h-[50px] bg-oc-error-200 rounded border"></div>
        <div class="h-[50px] bg-oc-error-300 rounded border"></div>
        <div class="h-[50px] bg-oc-error-400 rounded border"></div>
        <div class="h-[50px] bg-oc-error-500 rounded border"></div>
      </div>
      <div class="w-full"></div>
    </div>
  </section>
</template>

<style>
.teal-primary-color {
  --oc-primary-50-tr: #f0fdfa;
  --oc-primary-50: #ccfbf1;
  --oc-primary-100: #99f6e4;
  --oc-primary-200: #5eead4;
  --oc-primary-300: #2dd4bf;
  --oc-primary-400: #14b8a6;
  --oc-primary-500: #0d9488;

  --button-primary-default: linear-gradient(
    180deg,
    var(--oc-primary-400) 0%,
    var(--oc-primary-500) 100%
  );
  --button-primary-hover: linear-gradient(
    180deg,
    var(--oc-primary-400) 0%,
    var(--oc-primary-500) 100%
  );
  --button-primary-pressed: linear-gradient(
    180deg,
    var(--oc-primary-400) 0%,
    var(--oc-primary-500) 100%
  );
  --button-primary-disabled: linear-gradient(
    180deg,
    var(--oc-primary-400) 0%,
    var(--oc-primary-500) 100%
  );

  --button-secondary-default: linear-gradient(180deg, #fff 0%, #f2f2f2 100%);
  --button-secondary-hover: linear-gradient(180deg, #fff 0%, #fafafa 100%);
  --button-secondary-pressed: linear-gradient(180deg, #fafafa 0%, #fff 100%);
  --button-secondary-disabled: linear-gradient(
    180deg,
    #fcfcfc 0%,
    #f7f7f7 100%
  );
}

.dark.teal-primary-color {
  --oc-primary-500: #f0fdfa;
  --oc-primary-400: #ccfbf1;
  --oc-primary-300: #99f6e4;
  --oc-primary-200: #5eead4;
  --oc-primary-100: #2dd4bf;
  --oc-primary-50: #14b8a6;
  --oc-primary-50-tr: #0d9488;
}
</style>
