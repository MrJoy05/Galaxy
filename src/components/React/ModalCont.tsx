import { useEffect } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

function Modalshowcom() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  useEffect(() => {
    onOpen();
  }, [onOpen]); 

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Support the Project</ModalHeader>
              <ModalBody className="flex flex-col items-center">
                <img
                  src="images/logo.webp"
                  alt="Alexander Alegría"
                  className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover"
                />
                <p className="mt-4">
                  Esta página fue hecha sin ánimos de lucro, pero si te gustaría apoyar a proyectos, puedes hacer una donación a través de PayPal.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <a href="https://www.linkedin.com/in/alexander-alegria-70077527b" target="_blank" rel="noopener noreferrer">
                  <Button color="primary">
                    LinkedIn
                  </Button>
                </a>
                <a href="https://paypal.me/Alexanderalegri4?country.x=MX&locale.x=es_XC" target="_blank" rel="noopener noreferrer">
                  <Button color="primary" variant="shadow">
                    Donar
                  </Button>
                </a>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default Modalshowcom;
