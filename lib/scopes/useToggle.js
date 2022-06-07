const useToggle = ({ on }) => {

  const isOn = on ?? false;

  return {
    isOn,
    toggle( v = undefined) {
      this.isOn = v ?? !this.isOn;
    },
    turnOn() {
      this.isOn = true;
    },
    turnOff() {
      this.isOn = false;
    },
    get isOff() {
      return !this.isOn;
    }
  }
}

export {
  useToggle
}