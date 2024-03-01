export default function Jeff(props) {
    const { name, color, lock } = props;
    return (
      <button>
        {name} {color} {lock}
      </button>
    );
  }
  