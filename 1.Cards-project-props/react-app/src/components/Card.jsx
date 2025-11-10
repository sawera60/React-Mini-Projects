import React from "react";

const Card = ({ salary = "$100/hr", jobTitle="UI/UX Designer"}) => {
  const formattedsalary= typeof salary==="number" ? `$${salary}/hr` : salary;
  
  return (
    <>
      <div class="job-card">
        <div class="card-header">
          <img
            src="https://placehold.co/32x32/141414/ffffff?text=AZ"
            onerror="this.src='https://placehold.co/32x32/141414/ffffff?text=AZ'"
            alt="Company Logo"
            class="company-logo"
          />
          <button class="save-button">
            <i class="fa-regular fa-bookmark"></i>
            Save 
          </button>
        </div>
        {/*         
        <!-- Center Section: Job Details --> */}
        <div class="job-info">
          <h3 class="company-name">
            Amazon
            <span class="post-time">&bull; 5 days ago</span>
          </h3>
          <h2 class="job-title">{jobTitle}</h2>

          {/* <!-- Tags --> */}
          <div class="job-tags">
            <span class="tag">Part Time</span>
            <span class="tag">Senior Level</span>
          </div>
        </div>
        {/*         
        <!-- Bottom Section: Salary and Apply Button --> */}
        <div class="card-footer">
          <div>
            <h3 class="salary"> {formattedsalary}</h3>
            <p class="location">Islamabad, Pakistan</p>
          </div>
          <button class="apply-button">Apply Now</button>
        </div>
      </div>
    </>
  );
};

export default Card;
