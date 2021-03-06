let reviewCount = +(
  document.querySelector(".lessons-and-reviews__reviews-button span").innerText ??
  document.getElementById("review-queue-count").innerText ??
  0
)
let lessonCount = +(
  document.querySelector(".lessons-and-reviews__lessons-button span").innerText ??
  document.getElementById("lesson-queue-count").innerText ??
  0
)

let titleCount = reviewCount

document.title = `(${titleCount}) ${document.title.replace(/^\(\d+\)/, "")}`
