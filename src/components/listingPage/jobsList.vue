<template>
  <p class="absolute end-5 -top-10 text-lg text-grayText">
    <span>50 </span>نتيجة
  </p>
  <div class="grid grid-cols-2 gap-8 overflow-scroll h-screen no-scrollbar">
    <div
      class="max-w-lg border border-solid rounded-lg border-grayBorder bg-cardFill py-5 px-3"
    >
      <div dir="rtl" class="grid grid-cols-3 gap-x-6">
        <div class="flex flex-col justify-center items-center gap-2">
          <p class="text-grayText font-bold">مجال</p>

          <img
            :src="'/src/assets/photos/companyLogo.png'"
            class="w-12 cursor-pointer"
          />
        </div>
        <p class="mt-7 text-xl font-bold">مصمم UI/UX</p>
        <div class="flex flex-col justify-center items-center gap-5">
          <div class="flex gap-2">
            <p class="text-sm">منذ يومين</p>
            <box-icon
              class="cursor-pointer"
              name="bookmark"
              color="#0e2f56"
            ></box-icon>
          </div>
          <div class="flex gap-3">
            <p>طرابلس</p>
            <box-icon name="map" color="#0e2f56"></box-icon>
          </div>
        </div>
      </div>
      <div class="w-11/12 border-b border-grayBorder mx-auto mt-5"></div>
      <div class="mt-4 flex flex-col justify-center">
        <p dir="rtl" class="text-right pr-4 pl-2 pb-5">
          نحتاج أفرادا ذو خبرة ورؤية فنية في تصميم الجرافيك, والإستعداد للعمل مع
          فريق, يفضل أن يكون ماهرا في إستخدام برنامج Adobe illustrator, Adobe
          Photoshop, Figma...
        </p>
       <div class="text-grayText border border-solid border-grayBorder rounded-full px-10 py-1 bg-white hover:bg-btnHoverFill hover:border-borderHover transition duration-300 self-center">
        <router-link to="/jobs/job">التفاصيل</router-link>

       </div>
      </div>
    </div>
    <div
      class="max-w-lg border border-solid rounded-lg border-grayBorder bg-cardFill py-5 px-3"
    >
      <div dir="rtl" class="grid grid-cols-3 gap-x-6">
        <div class="flex flex-col justify-center items-center gap-2">
          <p class="text-grayText font-bold">مجال</p>
          <img
            :src="'/src/assets/photos/companyLogo.png'"
            class="w-12 cursor-pointer"
          />
        </div>
        <p class="mt-7 text-xl font-bold">مصمم UI/UX</p>
        <div class="flex flex-col justify-center items-center gap-5">
          <div class="flex gap-2">
            <p class="text-sm">منذ يومين</p>
            <box-icon
              class="cursor-pointer"
              name="bookmark"
              color="#0e2f56"
            ></box-icon>
          </div>
          <div class="flex gap-3">
            <p>طرابلس</p>
            <box-icon name="map" color="#0e2f56"></box-icon>
          </div>
        </div>
      </div>
      <div class="w-11/12 border-b border-grayBorder mx-auto mt-5"></div>
      <div class="mt-4 flex flex-col justify-center">
        <p dir="rtl" class="text-right pr-4 pl-2 pb-5">
          نحتاج أفرادا ذو خبرة ورؤية فنية في تصميم الجرافيك, والإستعداد للعمل مع
          فريق, يفضل أن يكون ماهرا في إستخدام برنامج Adobe illustrator, Adobe
          Photoshop, Figma...
        </p>
        <button
          class="text-grayText border border-solid border-grayBorder rounded-full px-10 py-1 bg-white hover:bg-btnHoverFill hover:border-borderHover transition duration-300 self-center"
        >
          المزيد
        </button>
      </div>
    </div>
    <div
      class="max-w-lg border border-solid rounded-lg border-grayBorder bg-cardFill py-5 px-3"
    >
      <div dir="rtl" class="grid grid-cols-3 gap-x-6">
        <div class="flex flex-col justify-center items-center gap-2">
          <p class="text-grayText font-bold">مجال</p>
          <img
            :src="'/src/assets/photos/companyLogo.png'"
            class="w-12 cursor-pointer"
          />
        </div>
        <p class="mt-7 text-xl font-bold">مصمم UI/UX</p>
        <div class="flex flex-col justify-center items-center gap-5">
          <div class="flex gap-2">
            <p class="text-sm">منذ يومين</p>
            <box-icon
              class="cursor-pointer"
              name="bookmark"
              color="#0e2f56"
            ></box-icon>
          </div>
          <div class="flex gap-3">
            <p>طرابلس</p>
            <box-icon name="map" color="#0e2f56"></box-icon>
          </div>
        </div>
      </div>
      <div class="w-11/12 border-b border-grayBorder mx-auto mt-5"></div>
      <div class="mt-4 flex flex-col justify-center">
        <p dir="rtl" class="text-right pr-4 pl-2 pb-5">
          نحتاج أفرادا ذو خبرة ورؤية فنية في تصميم الجرافيك, والإستعداد للعمل مع
          فريق, يفضل أن يكون ماهرا في إستخدام برنامج Adobe illustrator, Adobe
          Photoshop, Figma...
        </p>
        <button
          class="text-grayText border border-solid border-grayBorder rounded-full px-10 py-1 bg-white hover:bg-btnHoverFill hover:border-borderHover transition duration-300 self-center"
        >
          المزيد
        </button>
      </div>
    </div>
    <div
      class="max-w-lg border border-solid rounded-lg border-grayBorder bg-cardFill py-5 px-3"
    >
      <div dir="rtl" class="grid grid-cols-3 gap-x-6">
        <div class="flex flex-col justify-center items-center gap-2">
          <p class="text-grayText font-bold">مجال</p>
          <img
            :src="'/src/assets/photos/companyLogo.png'"
            class="w-12 cursor-pointer"
          />
        </div>
        <p class="mt-7 text-xl font-bold">مصمم UI/UX</p>
        <div class="flex flex-col justify-center items-center gap-5">
          <div class="flex gap-2">
            <p class="text-sm">منذ يومين</p>
            <box-icon
              class="cursor-pointer"
              name="bookmark"
              color="#0e2f56"
            ></box-icon>
          </div>
          <div class="flex gap-3">
            <p>طرابلس</p>
            <box-icon name="map" color="#0e2f56"></box-icon>
          </div>
        </div>
      </div>
      <div class="w-11/12 border-b border-grayBorder mx-auto mt-5"></div>
      <div class="mt-4 flex flex-col justify-center">
        <p dir="rtl" class="text-right pr-4 pl-2 pb-5">
          نحتاج أفرادا ذو خبرة ورؤية فنية في تصميم الجرافيك, والإستعداد للعمل مع
          فريق, يفضل أن يكون ماهرا في إستخدام برنامج Adobe illustrator, Adobe
          Photoshop, Figma...
        </p>
        <button
          class="text-grayText border border-solid border-grayBorder rounded-full px-10 py-1 bg-white hover:bg-btnHoverFill hover:border-borderHover transition duration-300 self-center"
        >
          المزيد
        </button>
      </div>
    </div>
    <div
      class="max-w-lg border border-solid rounded-lg border-grayBorder bg-cardFill py-5 px-3"
    >
      <div dir="rtl" class="grid grid-cols-3 gap-x-6">
        <div class="flex flex-col justify-center items-center gap-2">
          <p class="text-grayText font-bold">مجال</p>
          <img
            :src="'/src/assets/photos/companyLogo.png'"
            class="w-12 cursor-pointer"
          />
        </div>
        <p class="mt-7 text-xl font-bold">مصمم UI/UX</p>
        <div class="flex flex-col justify-center items-center gap-5">
          <div class="flex gap-2">
            <p class="text-sm">منذ يومين</p>
            <box-icon
              class="cursor-pointer"
              name="bookmark"
              color="#0e2f56"
            ></box-icon>
          </div>
          <div class="flex gap-3">
            <p>طرابلس</p>
            <box-icon name="map" color="#0e2f56"></box-icon>
          </div>
        </div>
      </div>
      <div class="w-11/12 border-b border-grayBorder mx-auto mt-5"></div>
      <div class="mt-4 flex flex-col justify-center">
        <p dir="rtl" class="text-right pr-4 pl-2 pb-5">
          نحتاج أفرادا ذو خبرة ورؤية فنية في تصميم الجرافيك, والإستعداد للعمل مع
          فريق, يفضل أن يكون ماهرا في إستخدام برنامج Adobe illustrator, Adobe
          Photoshop, Figma...
        </p>
        <button
          class="text-grayText border border-solid border-grayBorder rounded-full px-10 py-1 bg-white hover:bg-btnHoverFill hover:border-borderHover transition duration-300 self-center"
        >
          المزيد
        </button>
      </div>
    </div>
    <div
      class="max-w-lg border border-solid rounded-lg border-grayBorder bg-cardFill py-5 px-3"
    >
      <div dir="rtl" class="grid grid-cols-3 gap-x-6">
        <div class="flex flex-col justify-center items-center gap-2">
          <p class="text-grayText font-bold">مجال</p>
          <img
            :src="'/src/assets/photos/companyLogo.png'"
            class="w-12 cursor-pointer"
          />
        </div>
        <p class="mt-7 text-xl font-bold">مصمم UI/UX</p>
        <div class="flex flex-col justify-center items-center gap-5">
          <div class="flex gap-2">
            <p class="text-sm">منذ يومين</p>
            <box-icon
              class="cursor-pointer"
              name="bookmark"
              color="#0e2f56"
            ></box-icon>
          </div>
          <div class="flex gap-3">
            <p>طرابلس</p>
            <box-icon name="map" color="#0e2f56"></box-icon>
          </div>
        </div>
      </div>
      <div class="w-11/12 border-b border-grayBorder mx-auto mt-5"></div>
      <div class="mt-4 flex flex-col justify-center">
        <p dir="rtl" class="text-right pr-4 pl-2 pb-5">
          نحتاج أفرادا ذو خبرة ورؤية فنية في تصميم الجرافيك, والإستعداد للعمل مع
          فريق, يفضل أن يكون ماهرا في إستخدام برنامج Adobe illustrator, Adobe
          Photoshop, Figma...
        </p>
        <button
          class="text-grayText border border-solid border-grayBorder rounded-full px-10 py-1 bg-white hover:bg-btnHoverFill hover:border-borderHover transition duration-300 self-center"
        >
          المزيد
        </button>
      </div>
    </div>
    <div
      class="max-w-lg border border-solid rounded-lg border-grayBorder bg-cardFill py-5 px-3"
    >
      <div dir="rtl" class="grid grid-cols-3 gap-x-6">
        <div class="flex flex-col justify-center items-center gap-2">
          <p class="text-grayText font-bold">مجال</p>
          <img
            :src="'/src/assets/photos/companyLogo.png'"
            class="w-12 cursor-pointer"
          />
        </div>
        <p class="mt-7 text-xl font-bold">مصمم UI/UX</p>
        <div class="flex flex-col justify-center items-center gap-5">
          <div class="flex gap-2">
            <p class="text-sm">منذ يومين</p>
            <box-icon
              class="cursor-pointer"
              name="bookmark"
              color="#0e2f56"
            ></box-icon>
          </div>
          <div class="flex gap-3">
            <p>طرابلس</p>
            <box-icon name="map" color="#0e2f56"></box-icon>
          </div>
        </div>
      </div>
      <div class="w-11/12 border-b border-grayBorder mx-auto mt-5"></div>
      <div class="mt-4 flex flex-col justify-center">
        <p dir="rtl" class="text-right pr-4 pl-2 pb-5">
          نحتاج أفرادا ذو خبرة ورؤية فنية في تصميم الجرافيك, والإستعداد للعمل مع
          فريق, يفضل أن يكون ماهرا في إستخدام برنامج Adobe illustrator, Adobe
          Photoshop, Figma...
        </p>
        <button
          class="text-grayText border border-solid border-grayBorder rounded-full px-10 py-1 bg-white hover:bg-btnHoverFill hover:border-borderHover transition duration-300 self-center"
        >
          المزيد
        </button>
      </div>
    </div>
    <div
      class="max-w-lg border border-solid rounded-lg border-grayBorder bg-cardFill py-5 px-3"
    >
      <div dir="rtl" class="grid grid-cols-3 gap-x-6">
        <div class="flex flex-col justify-center items-center gap-2">
          <p class="text-grayText font-bold">مجال</p>
          <img
            :src="'/src/assets/photos/companyLogo.png'"
            class="w-12 cursor-pointer"
          />
        </div>
        <p class="mt-7 text-xl font-bold">مصمم UI/UX</p>
        <div class="flex flex-col justify-center items-center gap-5">
          <div class="flex gap-2">
            <p class="text-sm">منذ يومين</p>
            <box-icon
              class="cursor-pointer"
              name="bookmark"
              color="#0e2f56"
            ></box-icon>
          </div>
          <div class="flex gap-3">
            <p>طرابلس</p>
            <box-icon name="map" color="#0e2f56"></box-icon>
          </div>
        </div>
      </div>
      <div class="w-11/12 border-b border-grayBorder mx-auto mt-5"></div>
      <div class="mt-4 flex flex-col justify-center">
        <p dir="rtl" class="text-right pr-4 pl-2 pb-5">
          نحتاج أفرادا ذو خبرة ورؤية فنية في تصميم الجرافيك, والإستعداد للعمل مع
          فريق, يفضل أن يكون ماهرا في إستخدام برنامج Adobe illustrator, Adobe
          Photoshop, Figma...
        </p>
        <button
          class="text-grayText border border-solid border-grayBorder rounded-full px-10 py-1 bg-white hover:bg-btnHoverFill hover:border-borderHover transition duration-300 self-center"
        >
          المزيد
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>
