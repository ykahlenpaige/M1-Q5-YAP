const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );



const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );



const sphereGeometry = new THREE.SphereGeometry( 15, 32, 20 );

const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0x235d75 } );

const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );

scene.add( sphere );


const TorusGeometry = new THREE.TorusGeometry( 40, 3, 16, 100 );

const TorusMaterial = new THREE.MeshBasicMaterial( { color: 0x68818c } );

const torus = new THREE.Mesh( TorusGeometry, TorusMaterial );

scene.add( torus );



const Torus2Geometry = new THREE.TorusGeometry( 40, 3, 16, 100 );

const Torus2Material = new THREE.MeshBasicMaterial( { color: 0x82a2b0 } );

const torus2 = new THREE.Mesh( Torus2Geometry, Torus2Material );

scene.add( torus2 );



const Torus3Geometry = new THREE.TorusGeometry( 40, 3, 16, 100 );

const Torus3Material = new THREE.MeshBasicMaterial( { color: 0xa1bcc7 } );

const torus3 = new THREE.Mesh( Torus3Geometry, Torus3Material );

scene.add( torus3 );



const TorusKnotGeometry = new THREE.TorusKnotGeometry( 20, 2, 800, 200 );

const TorusKnotMaterial = new THREE.MeshBasicMaterial( { color: 0xb33314 } );

const torusKnot = new THREE.Mesh(TorusKnotGeometry, TorusKnotMaterial );

scene.add( torusKnot );



const CapsuleGeometry = new THREE.CapsuleGeometry( 5, 3, 4, 8, 6 );

const CapsuleMaterial = new THREE.MeshBasicMaterial( { color: 0x38a9eb } );

const capsule = new THREE.Mesh( CapsuleGeometry, CapsuleMaterial );

scene.add( capsule );



const CylinderGeometry = new THREE.CylinderGeometry( 5, 5, 20, 32 );

const CylinderMaterial = new THREE.MeshBasicMaterial( { color: 0x6b5b8c } );

const cylinder = new THREE.Mesh( CylinderGeometry, CylinderMaterial );

scene.add( cylinder );





capsule.position.y = 50;

cylinder.position.y = -50;

camera.position.z = 100;



function animate() {

torus.rotation.x += 0.01;

torus.rotation.y += 0.01;



cylinder.rotation.x += 0.01;

cylinder.rotation.y += 0.01;



torus2.rotation.x += 0.02;

torus2.rotation.y += 0.02;



capsule.rotation.x += 0.02;

capsule.rotation.y += 0.02;



torus3.rotation.x += 0.04;

torus3.rotation.y += 0.04;



torusKnot.rotation.x += 0.01;

torusKnot.rotation.y += 0.01;



sphere.rotation.x += 0.01;

sphere.rotation.y += 0.01;

 renderer.render( scene, camera );

}

renderer.setAnimationLoop( animate );