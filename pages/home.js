import React from "react";
import { Link } from "react-scroll";
import Swal from "sweetalert2";
class Home extends React.Component {
    render() {
		function Validate() {
            Swal.fire("Email has been sent successfully");
         }
        return(
            <div class="main-page">
                <header>
				
	   <div class="container">
	     <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#home-section">
	    <img src="assets/images/logo.png" alt="" width="300"/>
	  </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link activeClass="active" smooth={true} spy={true} offset={-10} duration={500} to="home-section">Home</Link>
        </li>
        <li class="nav-item">
          <Link activeClass="active" smooth={true} spy={true} offset={-10} duration={500} to="about-section">About</Link>
        </li>
        <li class="nav-item">
          <Link activeClass="active" smooth={true} spy={true} offset={-10} duration={500} to="services-section">Services</Link>
        </li>
        <li class="nav-item">
          <Link activeClass="active" smooth={true} spy={true} offset={-10} duration={500} to="team-section">Our Doctors</Link>
          </li>
        <li class="nav-item">
          <Link activeClass="active" smooth={true} spy={true} offset={-10} duration={500} to="booking-section">Contact Us</Link>
        </li>
        <li class="nav-item2">
          <a href="http://localhost/register.php" class="btn-more more-btn">Sign Up</a>
        </li>
        <li class="nav-item2">
          <a href="http://localhost/dashboard.php" class="btn-more more-btn">Sign In</a>
        </li>
		  
		  
		  
		  
      </ul>
     
    </div>
  </div>
</nav>
	</div>
	
	
	</header>	
{/* <!--End Header	--> */}
	
	
	
{/* <!--Start Hero Banner	--> */}
	<section class="hero-banner" id="home-section">
	     <div class="container">
		     <div class="row">
			      <div class="col-md-12">
				      <div class="banner-text-wrap">
					       <h1 class="text-white">We Provide Best Medical Services</h1>
						  <p class="text-white">Healthcare doesn't have to be difficult. We're constantly finding ways to make it easy so that you can get Better - and stay that way.</p>
						  <a href="/login" class="book btn-book">Book Appointment</a>
					  </div>
				 </div>
			 </div>
		</div>
	</section>
{/* <!--End Hero Banner	-->
	
	
<!--Start Features Section	--> */}
	<section class="features-section">
	      <div class="container">
		     <div class="row gx-0">
			      
				 <div class="col-md-4">
				      <div class="features-box bg1">
					      <img src="assets/images/calendar.png" alt=""/>
						  <h3>24 Hours Services</h3>
						  <p>HMS ER offers 24/7 emergency medical services giving you access to the best healthcare services in all situations. We’re dedicated to making sure that you receive extraordinary care at all times.</p>
					 </div>
				 </div>
				 
				 
				  <div class="col-md-4">
				      <div class="features-box bg2">
					      <img src="assets/images/staff.png" alt=""/>
						  <h3>Professional Staff</h3>
						  <p>We are committed to provide world class healthcare, teaching, training and research by a team of highly qualified doctors, dedicated nurses, para-medical and non-medical staff.</p>
					 </div>
				 </div>
				 
				   <div class="col-md-4">
				      <div class="features-box bg3">
					      <img src="assets/images/ambulance.png" alt=""/>
						  <h3>Emergency Care</h3>
						  <p>Our facility's central location in Arlington, TX makes it ideal to treat you if you are in need of urgent care. With advanced technology, we are equipped to quickly diagnose and stabilize you if you require immediate attention.</p>
					 </div>
				 </div>
				 
				 
			  </div>
		</div>
	</section>
{/* <!--End Features Section	--> */}
	
	

{/* <!--	Start About Section--> */}
	<section class="about-section"  id="about-section">
	      <div class="container">
		      <div class="row gx-5">
			      
				 <div class="col-md-6">
				        <div class="about-media">
					      <img src="assets/images/about.jpg" alt="" />
					 </div>
				  </div>
				  
				  <div class="col-md-6">
				       <div  class="about-info">
						   <h3>About Us</h3>
					        <p class="lead">Healthcare doesn't have to be difficult. We're constantly finding ways to make it easy so that you can get Better - and stay that way.

</p>
						   <p>MediManage is 100-bed multi-speciality Hospital in America. It provides comprehensive Healthcare services, and has acquired the status of a premier medical institution. We are committed to provide world class healthcare, teaching, training and research by a team of highly qualified doctors, dedicated nurses, para-medical and non-medical staff.</p>
						   
						    <p>Funds generated from the hospital services are partially utilised for providing free health care to the poor and needy patients. In addition to that we are running regular OPDs for all disciplines where patients are seen free of charge. 40% of all the investigations is the OPD patients are free of charge. These facilities are provided strictly on a first come, first serve.</p>

						    <p>Vision: To be leaders in healthcare delivery, medical education, training and research and to meet the changing expectations of the community.</p>
						   <a href="https://medimanageteam8.blogspot.com/p/home.html" class="btn-about about-btn" target="_blank" rel="noreferrer">Learn More</a>
					  </div>
				  </div>
				  
				  
				  
			  </div>
		</div>
	</section>
{/* <!--	End About Section-->
	
	
	
<!--Start services Section--> */}
	<section class="services-section" id="services-section">
	     <div class="container">
		     <div class="row">
			     
				 <div class="col-md-12">
				     <h2 class="section-title text-center">Services</h2>
				 </div>
				 
				 
				 <div class="col-md-4">
                    <a href="https://medimanageteam8.blogspot.com/p/services.html" class="services-div" target="_blank" rel="noreferrer">
				      <div class="services-box">
					      <img src="assets/images/neurology-icon.png" alt=""/>
						  <h3>Neurology</h3>
						  <p>The Department of Neurology at MediManage deals with managing and treating disorders related to the nervous system of the body. The department is focused on providing comprehensive care to the patients by remaining at the forefront of the technology.</p>
					 </div>
                     </a>
				 </div>
				 
				 
				 <div class="col-md-4">
                 <a href="https://medimanageteam8.blogspot.com/p/services.html" class="services-div" target="_blank" rel="noreferrer">
				      <div class="services-box">
					      <img src="assets/images/eyecare-icon.png" alt=""/>
						  <h3>Eyes care</h3>
						  <p>The Department of Ophthalmology deals with the anatomy, structure, physiology, and diseases related to the eyes. The team offers superlative care and treatment for all aged patients for diseases such as glaucoma, cataract, age-related macular degeneration and diabetic retinopathy.</p>
					 </div>
                     </a>
				 </div> 
				 
				 
				<div class="col-md-4">
                <a href="https://medimanageteam8.blogspot.com/p/services.html" class="services-div" target="_blank" rel="noreferrer">
				      <div class="services-box">
					      <img src="assets/images/pulmonary-icon.png" alt=""/>
						  <h3>Pulomonary</h3>
						  <p>The Pulmonology Department renders bronchoscopy services, both flexible and rigid. The department is well known for its competent work in interventional bronchoscopy, especially Trans-Bronchial Needle Aspiration (TBNA), electrosurgery procedures, balloon bronchoplasty and stenting.</p>
					 </div>
                     </a>
				 </div>  
				 
				 <div class="col-md-4">
                 <a href="https://medimanageteam8.blogspot.com/p/services.html" class="services-div" target="_blank" rel="noreferrer">
				      <div class="services-box">
					      <img src="assets/images/cardiology-icon.png" alt=""/>
						  <h3>Cardiology</h3>
						  <p>Our Hospital provides the treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease and electrophysiology. The cardiology team is highly experienced in diagnosing and treating diseases of the cardiovascular systems.</p>
					 </div>
                     </a>
				 </div>  
				 
				 
				  <div class="col-md-4">
                  <a href="https://medimanageteam8.blogspot.com/p/services.html" class="services-div" target="_blank" rel="noreferrer">
				      <div class="services-box">
					      <img src="assets/images/dental-icon.png" alt=""/>
						  <h3>Dental Care</h3>
						  <p>The Department of Dental Sciences offers expert care and services to patients of all age groups and also with special needs. The other procedures which are offered by the highly experienced team include impaction, implant surgeries, root canal treatments, management of improper tooth.</p>
					 </div>
                     </a>
				 </div>
				 
				 
				   <div class="col-md-4">
                   <a href="https://medimanageteam8.blogspot.com/p/services.html" class="services-div" target="_blank" rel="noreferrer">
				      <div class="services-box">
					      <img src="assets/images/hepatology-icon.png" alt=""/>
						  <h3>Hepatology</h3>
						  <p>At MediManage, Liver Transplants are carried out by country's most experienced, highly qualified and patient friendly team of experts who have extensive experience in patient care, superior patient satisfaction and outcomes, evaluation centres for liver donors and patients.</p>
					 </div>
                     </a>
				 </div>
				 
				 
			 </div>
		</div>
	</section>
{/* <!--End services Section-->
	
	
	
	
<!--Start Team Section	--> */}
	
	<section class="team-section" id="team-section">
	     <div class="container">
		     <div class="row">
			      <div class="col-md-12">
				      <h2 class="section-title text-center">Our Expert Team</h2>
				 </div>
				 
				 
				 <div class="col-md-3">
				     <div class="team-box">
                     <a href="https://medimanageteam8.blogspot.com/p/our-doctors.html" class="services-div" target="_blank" rel="noreferrer"> 
					     <div class="team-media">
						      <img src="assets/images/team/1.jpg" alt="" />
						 </div>
                         </a>
						 <div class="team-info">
						     <h3>Chris Evans</h3>
							 <p>Cardiologist</p>
							 <ul class="team-social">
							    <li> <a href="https://www.facebook.com" target="_blank" rel="noreferrer"> <i class="fa fa-facebook" aria-hidden="true"></i> </a>  </li>
							    <li> <a href="https://twitter.com" target="_blank" rel="noreferrer"> <i class="fa fa-twitter" aria-hidden="true"></i> </a>  </li>
							    <li> <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"> <i class="fa fa-linkedin" aria-hidden="true"></i></a>  </li>
							    <li> <a href="https://www.instagram.com" target="_blank" rel="noreferrer"> <i class="fa fa-instagram" aria-hidden="true"></i></a>  </li>
							 </ul>
						 </div>
					 </div>
				 </div>
				 
			 <div class="col-md-3">
				     <div class="team-box">
                     <a href="https://medimanageteam8.blogspot.com/p/our-doctors.html" class="services-div" target="_blank" rel="noreferrer"> 
					     <div class="team-media">
						      <img src="assets/images/team/2.jpg" alt="" />
						 </div>
                         </a>
						 <div class="team-info">
						     <h3>John Smith</h3>
							 <p>Neurologist</p>
							 <ul class="team-social">
							    <li> <a href="https://www.facebook.com" target="_blank" rel="noreferrer"> <i class="fa fa-facebook" aria-hidden="true"></i> </a>  </li>
							    <li> <a href="https://twitter.com" target="_blank" rel="noreferrer"> <i class="fa fa-twitter" aria-hidden="true"></i> </a>  </li>
							    <li> <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"> <i class="fa fa-linkedin" aria-hidden="true"></i></a>  </li>
							    <li> <a href="https://www.instagram.com" target="_blank" rel="noreferrer"> <i class="fa fa-instagram" aria-hidden="true"></i></a>  </li>
							 </ul>
						 </div>
					 </div>
				 </div>
				 
				 
				  <div class="col-md-3">
				     <div class="team-box">
                     <a href="https://medimanageteam8.blogspot.com/p/our-doctors.html" class="services-div" target="_blank" rel="noreferrer"> 
					     <div class="team-media">
						      <img src="assets/images/team/3.jpg" alt="" />
						 </div>
                         </a>
						 <div class="team-info">
						     <h3>Rob Miller</h3>
							 <p>Pulmonologist</p>
							 <ul class="team-social">
							    <li> <a href="https://www.facebook.com" target="_blank" rel="noreferrer"> <i class="fa fa-facebook" aria-hidden="true"></i> </a>  </li>
							    <li> <a href="https://twitter.com" target="_blank" rel="noreferrer"> <i class="fa fa-twitter" aria-hidden="true"></i> </a>  </li>
							    <li> <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"> <i class="fa fa-linkedin" aria-hidden="true"></i></a>  </li>
							    <li> <a href="https://www.instagram.com" target="_blank" rel="noreferrer"> <i class="fa fa-instagram" aria-hidden="true"></i></a>  </li>
							 </ul>
						 </div>
					 </div>
				 </div>
				 
				 
				  <div class="col-md-3">
				     <div class="team-box">
                     <a href="https://medimanageteam8.blogspot.com/p/our-doctors.html" class="services-div" target="_blank" rel="noreferrer"> 
					     <div class="team-media">
						      <img src="assets/images/team/4.jpg" alt="" />
						 </div>
                         </a>
						 <div class="team-info">
						     <h3>Emma Stone</h3>
							 <p>Hepatologist</p>
							 <ul class="team-social">
							    <li> <a href="https://www.facebook.com" target="_blank" rel="noreferrer"> <i class="fa fa-facebook" aria-hidden="true"></i> </a>  </li>
							    <li> <a href="https://twitter.com" target="_blank" rel="noreferrer"> <i class="fa fa-twitter" aria-hidden="true"></i> </a>  </li>
							    <li> <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"> <i class="fa fa-linkedin" aria-hidden="true"></i></a>  </li>
							    <li> <a href="https://www.instagram.com" target="_blank" rel="noreferrer"> <i class="fa fa-instagram" aria-hidden="true"></i></a>  </li>
							 </ul>
						 </div>
					 </div>
				 </div>
				 
				 
			 </div>
		</div>
	</section>
{/* <!--End Team Section	-->
	
	

	
<!--Start Booking Section--> */}

<section class="booking-section bg-overlay" id="booking-section">
	    <div class="container">
            <div class="row2">
	     	    <h2>Contact Us</h2>
			        <div class="container">
	    
			 
		                <div class="col-md-4">
					  
					        <ul class="booking-address">
					            <li>
						            <i class="fa fa-map-marker" aria-hidden="true"></i>
							            <div>
                                            <h4>Address</h4>
                                            <p>32905 Medlin Dr Suite 101
                                            Arlington, TX 76015 <br/></p>
							            </div>
						        </li>
						  
                                <li>
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                        <div>
                                            <h4>Phone</h4>
                                            <p> <a href="tel:+0123456789">+1 (817) 405-1958</a></p>
                                        </div>
                                </li> 
						  
                                <li>
                                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                        <div>
                                            <h4>Email</h4>
                                            <p> <a href="tel:+0123456789">Support@medimanage.com</a></p>
                                        </div>
                                </li> 
						  
						  
					        </ul>
				 
			            </div> 
					</div>
				<div class="contact-form">
					<form action="https://formsubmit.co/el/vavica" class="contact" method="POST">
                        <input type="text" name="name" class="text-box" placeholder="Your name" required/>
						<input type="hidden" name="_subject" value="Query from the Customer!"></input>
						<input type="hidden" name="_captcha" value="false"/>
                    <input type="hidden" name="_template" value="table"/>
                    <input type="hidden" name="_next" value="http://localhost:3000/"></input>
                        <input type="email" name="email" class="text-box" placeholder="Your email" required/>
                        <input type="subject" name="subject" class="text-box2" placeholder="Subject" required/>
                        <textarea name="message" rows="10" placeholder="Your query" required></textarea>
                        <input type="submit" name="submit" class="send-btn" value="Send" id="" onClick={Validate}/>
                    </form>
				</div>	
					
					
					
					
					
			 
			 
			</div>
        </div>
    </section>	
    {/* --End Booking Section-- */}
    <section id="footer-section">
		
	</section>
        </div>);
    }
}

export default Home;