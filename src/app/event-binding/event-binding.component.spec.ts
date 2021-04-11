import { EventBindingComponent } from "./event-binding.component";

describe("Event Binding Component", () => {
    it("Mouse Events Testing", () => {
        const comp = new EventBindingComponent();
        expect(comp.message).toBe("");
        comp.buttonClicked();
        expect(comp.message).toBe("Button Clicked");
        comp.buttonDblClicked();
        expect(comp.message).toBe("Button Double Clicked");
    });
});