export function Inject(
  ...dependencies: string[]
): (classConstructor: Function) => void {
  return (classConstructor: Function): void => {
    let $inject = (classConstructor.$inject = []);
    $inject = $inject.concat(dependencies as any);
    classConstructor.prototype.$inject = $inject;
    classConstructor.$inject = $inject;
  };
}
