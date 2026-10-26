// Project content shared by the existing card presentations.
window.portfolioProjects = {
  fsg: {title:'Felt So Good',chips:['Creative Direction','Playful Interactions','Visual Storytelling','Brand Experience']},
  bikers: {title:'Bikers World',chips:['Art Direction','Interactive Design','Visual Identity','Product Discovery']},
  rimmers: {title:'Rimmers Music',chips:['UX Research','Product Discovery','Finance UX','Navigation']},
  faith: {title:'Faith Jewellers',heading:'Elevating the Luxury Shopping Experience',chips:['Luxury E-commerce','Product Discovery','Visual Direction','Product Presentation']},
  judy: {title:'Judy Plum Wigs',heading:'A More Supportive Shopping Experience',chips:['UX Design','NHS Prescriptions','VAT Relief','Appointment Booking']},
  furniture: {title:'Big Furniture Warehouse',chips:['UX Research','Product Discovery','Interactive Shopping','Information Architecture']}
};
window.renderProjectChips = function(project) {
  const list=document.createElement('ul');list.className='project-chips';list.setAttribute('aria-label','Project skills and contributions');
  window.portfolioProjects[project].chips.forEach((label,index)=>{
    const chip=document.createElement('li');chip.className='project-chip';chip.textContent=label;chip.style.setProperty('--chip-index',index);list.append(chip);
  });
  return list.outerHTML;
};
