import React, {useState} from 'react';
import posed from 'react-pose';
import rectangleGradient from "../resource/images/rectangle.png";

// ease config - https://cubic-bezier.com

export function TextGroup() {

  const TitleText = posed.span({
    hidden: {y: 100},
    visible: {
      y: 0,
      transition: ({delay}) => ({delay, duration: 1300, ease: [0, .4, .0, 1]})
    }
  });

  const Button = posed.button({
    hidden: {x: 30, opacity: 0},
    visible: {
      x: 0,
      opacity: 1,
      transition: ({delay}) => ({
        x: {delay, duration: 400},
        opacity: {delay, duration: 1400},
      })
    }
  });

  return (
    <div className="text-group">
      <h1><TitleText delay={1700} initialPose={'hidden'} pose={'visible'}>DUBAI</TitleText></h1>
      <h1><TitleText delay={1750} initialPose={'hidden'} pose={'visible'}>WOMEN</TitleText></h1>
      <h1 className="sub-color"><TitleText delay={1800} initialPose={'hidden'} pose={'visible'}>ESTABLISH</TitleText>
      </h1>
      <h1 className="sub-color"><TitleText delay={1850} initialPose={'hidden'} pose={'visible'}>MENT</TitleText></h1>

      <div className="button-group">
        <Button delay={2800} initialPose={'hidden'} pose={'visible'}>Initiatives</Button>
        <Button delay={3000} initialPose={'hidden'} pose={'visible'} className="light">Programs</Button>
      </div>
    </div>
  )
};

export function WomanImage() {

  const WomanImage = posed.div({
    first: {scale: 1},
    second: {
      scale: 1.2,
      transition: ({delay}) => ({delay, duration: 12000})
    }
  });

  const SlideWhiteBars = posed.div({
    enter: {
      width: 722,
      transition: ({delay}) => ({delay, duration: 700, ease: [.02, .14, .83, .16]})
    },
    exit: {
      width: 0,
      transition: ({delay}) => ({delay, duration: 700, ease: [.02, .14, .83, .16]})
    }
  });

  const whiteBarsStyle = [
    {height: "25px", width: "330px", left: "-1px", top: "-1px"},
    {height: "100px", width: "205px", left: "30px", bottom: "0"},
    {height: "116px", width: "722px", right: "-2px", top: "-1px"},
    {height: "116px", width: "722px", right: "-2px", top: "114px"},
    {height: "116px", width: "722px", right: "-2px", top: "228px"},
    {height: "120px", width: "722px", right: "-2px", top: "342px"}
  ];
  return (
    <div className="woman">
      <WomanImage className="image-wrapper"
                  initialPose={'first'} pose={'second'}>
        <img src={rectangleGradient} style={{height: "460px"}}/>
      </WomanImage>
      <div className="white-bar" style={whiteBarsStyle[0]}/>
      <div className="white-bar" style={whiteBarsStyle[1]}/>
      <SlideWhiteBars delay={2300} initialPose={'enter'} pose={'exit'} className="white-bar" style={whiteBarsStyle[2]}/>
      <SlideWhiteBars delay={2450} initialPose={'enter'} pose={'exit'} className="white-bar" style={whiteBarsStyle[3]}/>
      <SlideWhiteBars delay={2600} initialPose={'enter'} pose={'exit'} className="white-bar" style={whiteBarsStyle[4]}/>
      <SlideWhiteBars delay={2700} initialPose={'enter'} pose={'exit'} className="white-bar" style={whiteBarsStyle[5]}/>

      <SlideWhiteBars delay={7800} initialPose={'exit'} pose={'enter'} className="white-bar" style={whiteBarsStyle[2]}/>
      <SlideWhiteBars delay={7700} initialPose={'exit'} pose={'enter'} className="white-bar" style={whiteBarsStyle[3]}/>
      <SlideWhiteBars delay={7550} initialPose={'exit'} pose={'enter'} className="white-bar" style={whiteBarsStyle[4]}/>
      <SlideWhiteBars delay={7400} initialPose={'exit'} pose={'enter'} className="white-bar" style={whiteBarsStyle[5]}/>
    </div>
  )
}

export function Shape1() {
  const [pose, setPose] = useState({initial: 'start', next: 'enter'});

  const Shape = posed.div({
    'start': {
      x: 0,
      width: 0
    },
    'enter': {
      x: 0,
      width: 315,
      transition: {
        delay: 2000, duration: 400
      }
    },
    'slide': {
      x: 10,
      width: 315,
      transition: {
        delay: 0, duration: 5000
      }
    }
  });

  const WhiteBar = posed.div({
    'start': {
      width: 0
    },
    'slide-white-bar': {
      width: 315,
      transition: {
        delay: 0, duration: 1000
      }
    }
  });

  const onPoseComplete = (pose) => {
    switch (pose) {
      case 'enter':
        setPose({initial: 'enter', next: 'slide'});
        break;
      case 'slide':
        setPose({initial: 'slide', next: 'exit'});
        break;
      case 'exit':
        setPose({initial: 'slide', next: 'slide-white-bar'});
        break;
    }
  };

  return (
    <Shape
      initialPose={pose.initial}
      onPoseComplete={onPoseComplete}
      pose={pose.next} className="shape1">
      <WhiteBar className='white-bar' initialPose='start' pose={pose.next}/>
      <div className="wrapper">
        <div/>
        <div/>
      </div>
    </Shape>
  )
};

export function Image1() {
  const startDelay = 2550;
  const [pose, setPose] = useState({initial: 'start', next: 'enter'});

  const Image = posed.div({
    'start': {
      y: 0,
      height: 0
    },
    'enter': {
      y: 0,
      height: 180,
      transition: {
        delay: startDelay, duration: 300
      }
    },
    'slide-up': {
      y: -20,
      height: 180,
      transition: {
        delay: 0, duration: 4000
      }
    },
    'exit': {
      y: -20,
      height: 0,
      transition: {
        delay: 0, duration: 400
      }
    }
  });

  const Bar = posed.div({
    'start': {
      y: 0,
      height: 0,
    },
    'enter': {
      y: 0,
      height: 50,
      transition: {
        delay: startDelay + 300, duration: 300
      }
    },
    'slide-up': {
      y: 0,
      height: 50
    },
    'exit': {
      y: 0,
      height: 50
    }
  });

  const WhiteBar = posed.div({
    'slide-up': {
      height: 0
    },
    'exit': {
      height: 51,
      transition: {
        delay: 400, duration: 200
      }
    }
  });

  const onPoseComplete = (pose) => {
    switch (pose) {
      case 'enter':
        setPose({initial: 'enter', next: 'slide-up'});
        break;
      case 'slide-up':
        setPose({initial: 'slide-up', next: 'exit'});
        break;
    }
  };

  return (
    <Image
      className="image1"
      initialPose={pose.initial}
      pose={pose.next}
      onPoseComplete={onPoseComplete}>
      <Bar initialPose={pose.initial} pose={pose.next}>
        <WhiteBar initialPose={pose.initial} pose={pose.next}/>
      </Bar>
    </Image>
  )
};

export function Image2() {

  const [pose, setPose] = useState({initial: 'start', next: 'enter'});

  const Image = posed.div({
    'start': {
      x: 0,
      width: 0,
    },
    'enter': {
      x: 0,
      width: 230,
      transition: {
        delay: 2650, duration: 200
      }
    },
    'slide-right': {
      x: 8,
      width: 230,
      transition: {
        delay: 0, duration: 4700
      }
    },
    'exit': {
      x: 8,
      width: 0,
      transition: {
        delay: 0, duration: 400
      }
    }
  });

  const onPoseComplete = (pose) => {
    switch (pose) {
      case 'enter':
        setPose({initial: 'enter', next: 'slide-right'});
        break;
      case 'slide-right':
        setPose({initial: 'slide-right', next: 'exit'});
        break;
    }
  };

  return (
    <Image
      className="image2"
      initialPose={pose.initial}
      pose={pose.next}
      onPoseComplete={onPoseComplete}>
    </Image>
  )
};

export function Shape2() {

  const [pose, setPose] = useState({initial: 'start', next: 'enter'});

  const Shape = posed.div({
    'start': {
      visibility: 'hidden'
    },
    'enter': {
      visibility: 'visible',
      transition: {
        delay: 3100
      }
    },
    'exit': {
      opacity: 0,
      transition: {
        delay: 4000, duration: 1
      }
    }
  });

  const onPoseComplete = (pose) => {
    if(pose === 'enter'){
      setPose({initial: 'enter', next: 'exit'});
    }
  };

  return (
    <Shape
      initialPose={pose.initial}
      onPoseComplete={onPoseComplete}
      pose={pose.next} className="shape2">
      <div/>
      <div/>
      <div/>
      <div/>
    </Shape>
  )
};

export function Shape3() {

  const [pose, setPose] = useState({initial: 'start', next: 'enter'});

  const FirstShape = posed.div({
    'start': {
      width: 0,
    },
    'enter': {
      width: 100,
      transition: {
        delay: 2900, duration: 1000
      }
    },
    'slide-right': {
      width: 100,
      transition: {
        delay: 0, duration: 3100
      }
    },
    'exit': {
      width: 100,
    }
  });

  const SecondShape = posed.div({
    'start': {
      width: 0,
    },
    'enter': {
      width: 31,
      transition: {
        delay: 2200
      }
    }
  });

  const ThirdShape = posed.div({
    'start': {
      width: 0,
      x: 0,
    },
    'enter': {
      width: 70,
      x: 0,
      transition: {
        delay: 2900, duration: 400,
      }
    },
    'slide-right': {
      width: 70,
      x: 20,
      transition: {
        delay: 0, duration: 4000,
      }
    },
    'exit': {
      width: 70,
      x: 20
    }
  });

  const WhiteBar1 = posed.div({
    'slide-right': {
      width: 0,
    },
    'exit': {
      width: 100,
      transition: {
        delay: 0, duration: 800
      }
    }
  });

  const WhiteBar2 = posed.div({
    'slide-right': {
      width: 0,
    },
    'exit': {
      width: 70,
      transition: {
        delay: 0, duration: 400
      }
    }
  });

  const WhiteBar3 = posed.div({
    'slide-right': {
      width: 0,
    },
    'exit': {
      width: 70,
      transition: {
        delay: 1000, duration: 400
      }
    }
  });

  const onPoseComplete = (pose) => {
    switch (pose) {
      case 'enter':
        setPose({initial: 'enter', next: 'slide-right'});
        break;
      case 'slide-right':
        setPose({initial: 'slide-right', next: 'exit'});
        break;
    }
  };

  return (
    <div className="shape3">
      <FirstShape
        className="first"
        initialPose={pose.initial}
        onPoseComplete={onPoseComplete}
        pose={pose.next}>
        <WhiteBar1
          className="white-bar"
          initialPose={pose.initial}
          pose={pose.next}/>
      </FirstShape>
      <SecondShape
        className="second"
        initialPose={pose.initial}
        pose={pose.next}>
        <WhiteBar2
          className="white-bar"
          initialPose={pose.initial}
          pose={pose.next}/>
      </SecondShape>
      <ThirdShape
        className="third"
        initialPose={pose.initial}
        pose={pose.next}>
        <div/>
        <div/>
        <WhiteBar3
          className="white-bar"
          initialPose={pose.initial}
          pose={pose.next}/>
      </ThirdShape>
    </div>
  )
};

export function Shape4() {
  const [pose, setPose] = useState({initial: 'start', next: 'enter'});

  const Shape = posed.div({
    'start': {
      width: 0,
      x: 0,
    },
    'enter': {
      width: 70,
      x: 0,
      transition: {
        delay: 2900, duration: 400,
      }
    },
    'slide-right': {
      width: 70,
      x: 20,
      transition: {
        delay: 0, duration: 4400,
      }
    },
    'exit': {
      width: 70,
      x: 20
    }
  });

  const WhiteBar = posed.div({
    'slide-right': {
      width: 0,
    },
    'exit': {
      width: 70,
      transition: {
        delay: 500, duration: 300
      }
    }
  });

  const onPoseComplete = (pose) => {
    switch (pose) {
      case 'enter':
        setPose({initial: 'enter', next: 'slide-right'});
        break;
      case 'slide-right':
        setPose({initial: 'slide-right', next: 'exit'});
        break;
    }
  };

  return (
    <Shape
      className="shape4"
      onPoseComplete={onPoseComplete}
      initialPose={pose.initial}
      pose={pose.next}>
      <div/>
      <div/>
      <WhiteBar
        className="white-bar"
        initialPose={pose.initial}
        pose={pose.next}/>
    </Shape>
  )
};
