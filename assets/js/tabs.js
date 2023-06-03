// Wait for the DOM to load

document.addEventListener("DOMContentLoaded", function () {
  // Get all the sections with the class .heading-primary
  const sections = document.querySelectorAll("h2.heading-primary");

  // Create an empty array to store the tab labels
  const tabLabels = [];

  // Loop through each section and create a tab label
  sections.forEach(function (section, index) {
    const sectionId = "section-" + (index + 1);
    section.id = sectionId; // Assign a unique ID to each section

    // Create the tab label
    const tabLabel = document.createElement("li");
    tabLabel.textContent = section.textContent;
    tabLabel.addEventListener("click", function () {
      // Scroll to the corresponding section when the tab is clicked
      section.scrollIntoView({ behavior: "smooth" });
      var tabBtn = document.querySelector(".tab-btn");
      tabBtn.click();
    });

    tabLabels.push(tabLabel); // Store the tab label in the array
  });

  // Create the tab container and add the tab labels
  const tabContainer = document.createElement("ul");
  tabContainer.classList.add("tab-container");
  tabLabels.forEach(function (tabLabel) {
    tabContainer.appendChild(tabLabel);
  });

  // Create the main div and add the tab container
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("tab-div");
  mainDiv.appendChild(tabContainer);

  // Create the tab button
  const tabBtn = document.createElement("button");
  tabBtn.classList.add("tab-btn");
  tabBtn.textContent = "»"; // Add the content inside the tab button

  // Append the tab button to the main div
  mainDiv.appendChild(tabBtn);

  // Create a new parent div for the tab-div
  const parentDiv = document.createElement("div");
  parentDiv.classList.add("parent-div");

  // Append the main div to the parent div
  parentDiv.appendChild(mainDiv);

  // Add the parent div to the document's body
  var countries = document.querySelector(".countries");
  countries.insertAdjacentElement("afterend", parentDiv);
});


$("body").on("click", '.tab-btn', function () {
    $(".parent-div").toggleClass("parent-div2")
  });

  $(document).ready(function() {
    setTimeout(function() {
        $(".tab-btn").click()
    }, 5000)
  })