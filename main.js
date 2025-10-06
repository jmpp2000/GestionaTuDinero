
document.addEventListener('DOMContentLoaded', function(){
  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth'});
    });
  });

  // reveal on scroll
  var reveals = document.querySelectorAll('.card, .post-item');
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting) entry.target.style.transform = 'translateY(0)';
    });
  }, {threshold:0.12});
  reveals.forEach(function(r){
    r.style.transform = 'translateY(14px)';
    r.style.opacity = '0.98';
    obs.observe(r);
  });
});
