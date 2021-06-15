// Auto Bind Decorators
function autoBind(_: any, _2: any, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFun = originalMethod.bind(this);
      return boundFun;
    },
  };
  return adjDescriptor;
}

// ProjectInput Class
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopeInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";

    this.titleInputElement = document.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = document.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopeInputElement = document.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }

  @autoBind
  private submitHandler(event: Event) {
    event.preventDefault();
    console.log("SUbmitting");
    console.log(this);
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }
}

const projectInp = new ProjectInput();
