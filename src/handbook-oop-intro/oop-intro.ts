interface Pointlike {
  x: number;
  y: number;
}

interface Named {
  name: string;
}

class StructuralTypes {
  public addPoints(point: Pointlike) {
    return point.x + point.y;
  }

  public getName(x: Named) {
    return x.name;
  }
}

class Empty {}

class Car {
  drive() {
   return "Car go brrr";
  }
}

class Golfer {
  drive() {
    return "Golf cart go brrr";
  }
}

export { StructuralTypes, Empty, Car, Golfer };
