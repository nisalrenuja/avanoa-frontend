import { Component } from "react";
import { connect } from "react-redux";
import {
	decrement,
	increment,
	setCount,
	setPreCount,
} from "../../reducers/counter/counterSlice";
import { selection } from "../../reducers/selectedIndexSlice/selectedIndexSlice";
import {
	updateTree,
	updateTreeLayers,
	updateIndex,
	updatePreIndex,
	updateLayer,
	incrementLayer,
	decrementLayer,
} from "../../reducers/navList/navListSlice";


class WebGazer extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		cn: 0,
		count: 0,
	};

	componentDidUpdate() {
		
		
	}

	componentDidMount() {

		const tree = this.props.navList.tree;
		const treeLayers = this.props.navList.treeLayers;
		const treeLayersExc = this.props.navList.treeLayersExc;
		const treeLayersExcInvert = this.props.navList.treeLayersExcInvert;
		const treeExc = this.props.navList.treeExc;

		console.log(treeLayers);

		const LOOK_DELAY = 10; // 1 second
		const LEFT_CUTOFF = window.innerWidth / 6;
		const RIGHT_CUTOFF = window.innerWidth - window.innerWidth / 6;
		const TOP_CUTOFF = window.innerHeight / 10;

		let startLookTime = Number.POSITIVE_INFINITY;
		let lookDirection = null;

		const webgazer = window.webgazer;
		webgazer.setRegression("ridge");
		webgazer.showVideoPreview(false);
		//const blink = new webgazer.BlinkDetector;

		console.log(webgazer.getTracker());
		webgazer.applyKalmanFilter(true);

		window.saveDataAcrossSessions = true;
		webgazer
			.setGazeListener((data, timestamp) => {
				//console.log(data, timestamp);
				if (data == null || lookDirection === "STOP") return;

				if (data.x < LEFT_CUTOFF &&
					lookDirection !== "LEFT" &&
					lookDirection !== "RESET"
				) {
					startLookTime = timestamp;
					lookDirection = "LEFT";
				} else if (
					data.x > RIGHT_CUTOFF &&
					lookDirection !== "RIGHT" &&
					lookDirection !== "RESET"
				) {
					startLookTime = timestamp;
					lookDirection = "RIGHT";
				}

				if (data.y < TOP_CUTOFF && lookDirection !== "RESET") {
					if (this.state.cn === this.state.count && treeLayers[this.props.navList.index] !== null) {
						let curLayer = treeLayers[this.props.navList.index];
						console.log("curLayer " + curLayer);

						//this.props.selection(this.props.counter.value)
						if (typeof curLayer !== "undefined") {
							this.props.updateIndex(this.props.counter.value + curLayer);
						}

						if (typeof curLayer == "undefined") {
							console.log("undefined stated")
							let TLVal = treeLayersExc[this.props.navList.index]
							if(typeof TLVal !== "undefined"){
								this.props.updateIndex(this.props.counter.value + TLVal);
							}
						}

						//console.log('selected' + this.props.counter.value)
						if (this.props.counter.value !== 0) {
							this.props.setPreCount(this.props.counter.value);
						}
						this.props.setCount(0);
						//this.selectBubble(this.state.count);
						this.setState({ cn: this.state.cn + 1 });
					}
				} else if (data.x >= LEFT_CUTOFF && data.x <= RIGHT_CUTOFF) {
					startLookTime = Number.POSITIVE_INFINITY;
					lookDirection = null;
					this.setState({ cn: this.state.count });
				}

				if (startLookTime + LOOK_DELAY < timestamp) {
					if (lookDirection === "TOP") {
						console.log("looking top" + this.state.count);
					} else if (lookDirection === "LEFT") {
						if (this.props.counter.value > 0) {
							this.props.decrement();
							this.props.updateLayer(this.props.counter.value + 1);
							//console.log(this.props.counter.value);
							this.setState({ count: this.state.count - 1 });
							this.setState({ cn: this.state.count });
							
						} else if (this.props.counter.value === 0) {
							this.props.updateLayer(0);
						}

						//console.log(this.props.navList.layer)

						if (this.props.navList.layer === 0 && this.props.navList.index > 0) {
							//console.log("inside execu");
							const TL = this.props.navList.treeLayers;
							let index = TL.indexOf(this.props.navList.index);

							if (index === -1) {
								console.log("indexOF" + this.props.navList.index);
								//this.props.updatePreIndex(this.props.navList.index);
								index = TL.indexOf(this.props.navList.index - this.props.counter.preValue);
								if (this.props.navList.index - this.props.counter.preValue <= 0) {
									index = 0;
								}
								if (index === -1) {
									let val = this.props.navList.indexCount[this.props.navList.index];
									console.log("pre index val " + val);
									index = TL.indexOf(this.props.navList.index - val);

									//index = TL.indexOf(this.props);
								}
								if (index === -1) {
									let val = this.props.navList.indexCount[this.props.navList.index];
									console.log("after backward" +treeLayersExcInvert[this.props.navList.index - val]);
									index = treeLayersExcInvert[this.props.navList.index - val];
								}
							}
							
							if (index !== -1) {
								this.props.updateIndex(index);
							}
						}
						//console.log("looking left"+ this.state.count);
					} else {
						let TVal =  this.props.navList.tree[this.props.navList.index];
						if(typeof TVal === 'undefined'){
							TVal = treeExc[this.props.navList.index];
							//console.log("unde ststdgdslkg")
						}
						console.log("TVAL : " + TVal + " value" + this.props.navList.tree[this.props.navList.index]);
						if (this.props.counter.value < TVal - 1) {
							this.setState({ count: this.state.count + 1 });
							this.setState({ cn: this.state.count });

							this.props.increment();
							this.props.updateLayer(this.props.counter.value + 1);
							//console.log(this.props.counter.value);
						}
						//console.log("looking right" + this.state.count);
					}

					startLookTime = Number.POSITIVE_INFINITY;
					lookDirection = "STOP";
					setTimeout(() => {
						console.log("time reset");
						lookDirection = "RESET";
					}, 200);
				}
			})
			.begin();
	}

	render() {
		// const ls =this.props.navList.list;
		// const ind = this.props.navList.index;

		// console.log(ls[ind])
		//this.props.updateIndex(1);
		return <>
		</>;
	}
}

const mapStateToProps = (state) => ({
	counter: state.counter,
	navList: state.navList,
	selectedIndex: state.selectedIndex,
});

const mapDispatchToProps = () => ({
	increment,
	decrement,
	setCount,
	selection,
	updateTree,
	updateTreeLayers,
	updateIndex,
	updatePreIndex,
	updateLayer,
	incrementLayer,
	decrementLayer,
	setPreCount,
	
});

export default connect(mapStateToProps, mapDispatchToProps())(WebGazer);
