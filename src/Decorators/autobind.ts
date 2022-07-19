export default function autobind(
    target: any,
    name: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    const originalFunction = descriptor.value;
  
    return {
      configurable: true,
      enumerable: false,
      get() {
        return originalFunction.bind(this);
      },
    };
  }
  