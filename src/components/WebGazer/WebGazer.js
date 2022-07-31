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
import store from "../../store/store";

class WebGazer extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		cn: 0,
		count: 0,
	};

	componentDidUpdate() {
		
		//     if (this.state.count === 0 && this.state.select1 === "notSelected") {
		//       this.setState({ select1: "selected" });
		//       this.setState({ select2: "notSelected" });
		//     } else if (this.state.count === 1 && this.state.select2 === "notSelected") {
		//       this.setState({ select2: "selected" });
		//       this.setState({ select1: "notSelected" });
		//       this.setState({ select3: "notSelected" });
		//     } else if (this.state.count === 2 && this.state.select3 === "notSelected") {
		//       this.setState({ select3: "selected" });
		//       this.setState({ select2: "notSelected" });
		//       this.setState({ select4: "notSelected" });
		//     } else if (this.state.count === 3 && this.state.select4 === "notSelected") {
		//       this.setState({ select4: "selected" });
		//       this.setState({ select3: "notSelected" });
		//       this.setState({ select5: "notSelected" });
		//     } else if (this.state.count === 4 && this.state.select5 === "notSelected") {
		//       this.setState({ select5: "selected" });
		//       this.setState({ select4: "notSelected" });
		//       this.setState({ select6: "notSelected" });
		//     } else if (this.state.count === 5 && this.state.select6 === "notSelected") {
		//       this.setState({ select6: "selected" });
		//       this.setState({ select5: "notSelected" });
		//       this.setState({ select7: "notSelected" });
		//     } else if (this.state.count === 6 && this.state.select7 === "notSelected") {
		//       this.setState({ select7: "selected" });
		//       this.setState({ select6: "notSelected" });
		//       this.setState({ select8: "notSelected" });
		//     } else if (this.state.count === 7 && this.state.select8 === "notSelected") {
		//       this.setState({ select8: "selected" });
		//       this.setState({ select7: "notSelected" });
		//       this.setState({ select9: "notSelected" });
		//     } else if (this.state.count === 8 && this.state.select9 === "notSelected") {
		//       this.setState({ select9: "selected" });
		//       this.setState({ select8: "notSelected" });
		//     }
	}

	componentDidMount() {
		// const script = document.createElement("script");
		// script.src = "https://webgazer.cs.brown.edu/webgazer.js?";
		// script.async = true;
		// document.body.appendChild(script);
		
		const tree = this.props.navList.tree;
		const treeLayers = this.props.navList.treeLayers;
		const treeLayersExc = this.props.navList.treeLayersExc;
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
							this.props.updateIndex(this.props.counter.value + TLVal);
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
							}
							console.log("after backward" + index);
							if (index !== -1) {
								this.props.updateIndex(index);
							}
						}
						//console.log("looking left"+ this.state.count);
					} else {
						let TVal =  tree[this.props.navList.index];
						if(typeof TVal === 'undefined'){
							TVal = treeExc[this.props.navList.index];
							//console.log("unde ststdgdslkg")
						}
						console.log("TVAL : " + TVal);
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
		return <></>;
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
