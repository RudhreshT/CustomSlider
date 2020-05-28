import React, {Component} from 'react';
import './App.css'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Slider from './Slider';


const images = [
  'https://www.youtube.com/watch?v=4YQ4svkETS0',
  'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
  'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
  'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
]


export default class App extends Component  { 
  constructor(props){
    super(props);
    this.state={
        key:0,
        sortablearray:[{title:"",prc:"",img:"",dec:""},{title:"",prc:"",img:"",dec:""},{title:"",prc:"",img:"",dec:""},{title:"",prc:"",img:"",dec:""},{title:"",prc:"",img:"",dec:""},{title:"",prc:"",img:"",dec:""},{title:"",prc:"",img:"",dec:""},{title:"",prc:"",img:"",dec:""},{title:"",prc:"",img:"",dec:""}],
    }
    
  }
  componentDidMount (){
    setTimeout(()=>this.setValues(),4000);
  }
  setValues(){
    let lateValues=[{title:"Chartwell School: Case Study",
                    prc:"$15.00",
                    img:"https://www.usgbc.org/sites/default/files/resources-CaseChartwell.jpg",
                    dec:"This case study, on the first-ever LEED Platinum school, brings to life the visioning, design, construction, and operation of Chartwell School, located in Seaside California."},
                    {title:"LEED Green Associate Exam Preparation Guide, LEED v4 Edition",
                    prc:"$99.00",
                    img:"https://www.usgbc.org/sites/default/files/LGAcover_0.jpg",
                    dec:"The LEED Green Associate Exam Preparation Guide, LEED v4 Edition is designed to help you pass the LEED Green Associate exam. The exam prep guide captures the critical points you need to know about green building."},
                    {title:"LEED Core Concepts Guide",
                    prc:"$99.00",
                    img:"https://www.usgbc.org/sites/default/files/CoreConceptsGuide_COVER.jpg",
                    dec:"Looking to learn about LEED and green building, but don't know where to start? The LEED Core Concepts Guide introduces the green building fundamentals to get you started on your learning path."},
                    {title:"LEED Reference Guide for Building Operations and Maintenance",
                    prc:"$249.00",
                    img:"https://www.usgbc.org/sites/default/files/RefThumb_OM.png",
                    dec:"The fully interactive web-based reference guide is a simple, one-stop-shop for all LEED v4 resources for all rating systems including over 50 multimedia modules"},
                    {title:"USGBC+ Magazine March/April 2016",
                    prc:"$06.00",
                    img:"https://www.usgbc.org/sites/default/files/USGBCMagazine_03-2016.jpg",
                    dec:"USGBC+, the membership magazine of the U.S. Green Building Council, explores the life and work of the people who design and craft intelligent, high-performance buildings and spaces"},
                    {title:"The Paid-From-Savings Guide to Green Existing Buildings",
                    prc:"$50.00",
                    img:"https://www.usgbc.org/sites/default/files/resources-PFS.jpg",
                    dec:"The resource provides information to help leverage utility cost savings to fund comprehensive green building retrofits."},
                    {title:"PEER Reference Guide",
                    prc:"$269.00",
                    img:"https://www.usgbc.org/sites/default/files/peer-cover-thumbnail.png",
                    dec:"Performance Excellence in Electricity Renewal (PEER) is the nation’s first comprehensive, consumer-centric, and data- and market-driven system for evaluating power system performance."},
                    {title:"One and Two Potomac Yard: Case Study",
                    prc:"$18.00",
                    img:"https://www.usgbc.org/sites/default/files/resources-casePotomac.jpg",
                    dec:"Learn how one project team addressed a LEED learning curve for every single one of its subcontractors by focusing on critical credits and coming out on top with two LEED certifications, and earn credential maintenance hours."},
                    {title:"Parksmart Certification Standard",
                    prc:"$15.00",
                    img:"https://www.usgbc.org/sites/default/files/Parksmart_Standard_store-thumbnail.jpg",
                    dec:"Parksmart Certification Standard is the detailed reference manual for Parksmart certification (formerly Green Garage Certification"}]
    this.setState({sortablearray:lateValues});
  }

  getSorted_asc(){
    let sortablearray = this.state.sortablearray;
    //sortablearray.sort((a,b) => a.title - b.title);
    sortablearray.sort(this.GetSortOrder_asc("title"));
    this.setState({sortablearray})
  }
   
  GetSortOrder_asc(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
  } 
  
  getSorted_dec(){
    let sortablearray = this.state.sortablearray;
    sortablearray.sort(this.GetSortOrder_dec("title"));
    this.setState({sortablearray})
  }
  
  GetSortOrder_dec(prop) {    
    return function(a, b) {    
        if (a[prop] < b[prop]) {    
            return 1;    
        } else if (a[prop] > b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
  } 

  setDetail(id){
    this.setState({key:id})
  }
  render(){
    let sortedvalue = this.state.sortablearray;
    this.dec = sortedvalue[0].dec;
    //this.SampleArray_2 = dec.toString();

  return (
    <div className="App">
     {/*  <div class="modal" id="myModal">
          <div class="modal-dialog" style={{ maxWidth: 600 }}>
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title"><h5><b>{this.state.sortablearray[this.state.key].title}</b></h5></h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <div class="modal-body col-md-12 row">
                <div className="col-md-6" >
                  <img className="card-img-top" src={this.state.sortablearray[this.state.key].img} /><hr></hr>
                    <h1 className="grid-item--subTitle" style={{ textAlign: 'center'}}><h5><b>{this.state.sortablearray[this.state.key].prc}</b></h5></h1>
                </div>
                <div className="col-md-6">
                  
                  <div className="card-body">
                    <ReadMoreAndLess
                        ref={this.ReadMore}
                        className="read-more-content"
                        charLimit={80}
                        readMoreText="Read more"
                        readLessText="Read less"
                    >
                        {this.state.sortablearray[this.state.key].dec}
                    </ReadMoreAndLess>
                  </div>
                  <div style={{position:"absolute",bottom:0,right:0}}>
                  </div>
                </div>
              </div>          
            </div>
          </div>
        </div>
        

      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
      <img
        src="https://usgbc-react-assets.s3.amazonaws.com/static/images/black-oak-leaves.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
        <Navbar.Brand href="#home"><h5><b>USGBC Store</b></h5></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#product_list">Product list</Nav.Link>
            <Nav.Link href="#product_slider">Product Slider</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <div>
        <h1 style={{color:'#fff'}}>USGBC Store</h1>
      </div> 
      <div className="slide-container" axis="vertical">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`,height: '50vh',width: '100%'}}>
              <span></span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`,height: '50vh',width: '100%'}}>
              <span></span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`,height: '50vh',width: '100%'}}>
              <span></span>
            </div>
          </div>
        </Slide>
      </div>

      <h1 id="product_list" style={{color:'#fff'}}>Products</h1>
      <div className="container grid-result--wrapper"  style={{marginTop:"30px"}}>
        <div className="row">
          <button className='btn btn-warning' onClick ={()=>this.getSorted_asc()} > A - Z </button>&nbsp;
          <button className='btn btn-warning' onClick ={()=>this.getSorted_dec()} > Z - A </button>
        </div>
        <br></br>
        <div className="row">
          <div className="col-md-4">
            <div className="card" onClick={()=>this.setDetail(0)} data-toggle="modal" data-target="#myModal">
              {sortedvalue[0].img  ? (
                  <img className="card-img-top" style={{height: "60%",width:"80%"}} src={sortedvalue[0].img }/>
                ) : (
                  <Skeleton height={250} width={250} />
                )}
              <hr></hr>
              <div className="card-body">
                <p className="grid-item--title"><h5><b>{sortedvalue[0].title || <Skeleton  height={40} />} </b></h5></p>
                <h1 className="grid-item--subTitle">{sortedvalue[0].prc || <Skeleton />} </h1>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" onClick={()=>this.setDetail(1)} data-toggle="modal" data-target="#myModal">
              {sortedvalue[0].img  ? (
                  <img className="card-img-top" style={{height: "60%",width:"80%"}} src={sortedvalue[1].img }/>
                ) : (
                  <Skeleton height={250} width={250} />
                )}
              <hr></hr>
              <div className="card-body">
                <h2 className="grid-item--title"><h5><b>{sortedvalue[1].title || <Skeleton  height={40} />} </b></h5></h2>
                <h1 className="grid-item--subTitle">{sortedvalue[1].prc || <Skeleton />} </h1>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card" onClick={()=>this.setDetail(2)} data-toggle="modal" data-target="#myModal">
              {sortedvalue[0].img  ? (
                  <img className="card-img-top" style={{height: "60%",width:"80%"}} src={sortedvalue[2].img }/>
                ) : (
                  <Skeleton height={250} width={250} />
                )}
              <hr></hr>
              <div className="card-body">
                <h1 className="grid-item--title"><h5><b>{sortedvalue[2].title || <Skeleton  height={40} />} </b></h5></h1>
                <h1 className="grid-item--subTitle">{sortedvalue[2].prc || <Skeleton />} </h1>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="container" style={{marginTop:"30px"}}>
        <div className="row">
        <div className="col-lg-4">
          <div className="card" onClick={()=>this.setDetail(3)} data-toggle="modal" data-target="#myModal">
              {sortedvalue[0].img  ? (
                  <img className="card-img-top" style={{height: "60%",width:"80%"}} src={sortedvalue[3].img }/>
                ) : (
                  <Skeleton height={250} width={250} />
                )}
              <hr></hr>
              <div className="card-body">
                <h1 className="grid-item--title"><h5><b>{sortedvalue[3].title || <Skeleton  height={40} />} </b></h5></h1>
                <h1 className="grid-item--subTitle">{sortedvalue[3].prc || <Skeleton />} </h1>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card" onClick={()=>this.setDetail(4)} data-toggle="modal" data-target="#myModal">
              {sortedvalue[0].img  ? (
                  <img className="card-img-top" style={{height: "60%",width:"80%"}} src={sortedvalue[4].img }/>
                ) : (
                  <Skeleton height={250} width={250} />
                )}
              <hr></hr>
              <div className="card-body">
                <h1 className="grid-item--title"><h5><b>{sortedvalue[4].title || <Skeleton  height={40} />} </b></h5></h1>
                <h1 className="grid-item--subTitle">{sortedvalue[4].prc || <Skeleton />} </h1>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card" onClick={()=>this.setDetail(5)} data-toggle="modal" data-target="#myModal">
              {sortedvalue[0].img  ? (
                  <img className="card-img-top" style={{height: "60%",width:"80%"}} src={sortedvalue[5].img }/>
                ) : (
                  <Skeleton height={250} width={250} />
                )}
              <hr></hr>
              <div className="card-body">
                <h1 className="grid-item--title"><h5><b>{sortedvalue[5].title || <Skeleton  height={40} />} </b></h5></h1>
                <h1 className="grid-item--subTitle">{sortedvalue[5].prc || <Skeleton />} </h1>
              </div>
            </div>
          </div>

        </div>
        
      </div>
      <div className="container" style={{marginTop:"30px"}}>
        <div className="row">
        <div className="col-lg-4">
          <div className="card" onClick={()=>this.setDetail(6)} data-toggle="modal" data-target="#myModal">
              {sortedvalue[0].img  ? (
                  <img className="card-img-top" style={{height: "60%",width:"80%"}} src={sortedvalue[6].img }/>
                ) : (
                  <Skeleton height={250} width={250} />
                )}
              <hr></hr>
              <div className="card-body">
                <h1 className="grid-item--title"><h5><b>{sortedvalue[6].title || <Skeleton  height={40} />} </b></h5></h1>
                <h1 className="grid-item--subTitle">{sortedvalue[6].prc || <Skeleton />} </h1>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card" onClick={()=>this.setDetail(7)} data-toggle="modal" data-target="#myModal">
              {sortedvalue[0].img  ? (
                  <img className="card-img-top" style={{height: "60%",width:"80%"}} src={sortedvalue[7].img }/>
                ) : (
                  <Skeleton height={250} width={250} />
                )}
              <hr></hr>
              <div className="card-body">
                <h1 className="grid-item--title"><h5><b>{sortedvalue[7].title || <Skeleton  height={40} />} </b></h5></h1>
                <h1 className="grid-item--subTitle">{sortedvalue[7].prc || <Skeleton />} </h1>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
              <div className="card" onClick={()=>this.setDetail(8)} data-toggle="modal" data-target="#myModal">
                {sortedvalue[0].img  ? (
                    <img className="card-img-top" style={{height: "60%",width:"80%"}} src={sortedvalue[8].img }/>
                  ) : (
                    <Skeleton height={250} width={250} />
                  )}
                <hr></hr>
                <div className="card-body">
                  <h1 className="grid-item--title"><h5><b>{sortedvalue[8].title || <Skeleton  height={40} />} </b></h5></h1>
                  <h1 className="grid-item--subTitle">{sortedvalue[8].prc || <Skeleton />} </h1>
                </div>
              </div>
          </div>

        </div>
      </div>
      
      <div className="container" id="product_slider" style={{marginTop:"30px"}} >
        <h1  style={{color:'#fff'}}>Store Products</h1>
        <Carousel showArrows={false}  {...getConfigurableProps()} axis="vertical">
          <div key="slide1" style={{ height: '500px'}} >
              <img src={require('./images/p1.jpg')}/>
          </div>
          <div key="slide2"  style={{ height: '500px'}}>
              <img src={require('./images/p2.jpg')}/>
          </div>
          <div key="slide3"  style={{ height: '500px'}}>
              <img src={require('./images/p3.jpg')} />
          </div>
          <div key="slide4"  style={{ height: '500px'}}>
              <img src={require('./images/p4.jpg')} />
          </div>
          <div key="slide5" style={{ height: '500px'}}>
              <img src={require('./images/p5.jpg')} />
          </div>
          <div key="slide6" style={{ height: '500px'}}>
              <img src={require('./images/p6.jpg')} />
          </div>
          <div key="slide6" style={{ height: '500px'}}>
              <img src={require('./images/p7.jpg')}/>
          </div>
          <div key="slide6" style={{ height: '500px'}}>
              <img src={require('./images/p8.jpg')} />
          </div>
          <div key="slide6"  style={{ height: '500px'}}>
              <img src={require('./images/p9.jpg')} />
          </div>
          <div key="slide6"  style={{ height: '500px'}}>
              <img src={require('./images/p10.jpg')} />
          </div>
        </Carousel>
      </div> */}

      <div style={{marginTop:"30px"}} id="product_slider">
          <Slider slides={images} />
      </div>

    </div>
  );
  }
}
