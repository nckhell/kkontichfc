/* eslint-disable camelcase */
import React from "react";
import * as R from "ramda";

export class CannotFindFieldInEntryOfArrayOfObjectsResponse extends Error {
  constructor({ field }: { field: string }) {
    super(`Cannot find field ${field} in array of objects entry.`);
  }
}

export class CannotFindfArrayOfObjectQuestionIdInResponse extends Error {
  constructor({ question_id }: { question_id: string }) {
    super(
      `Cannot find array of objects with question id "${question_id}" in response.`
    );
  }
}

const response_test_1 = {
  measurements: [
    {
      blood_sugar_level: 89,
      period: "Vóór ontbijt",
      date: "2019-10-04T08:36:00.000Z",
      time: "8:36"
    },
    {
      blood_sugar_level: 68,
      period: "Na ontbijt",
      date: "2019-10-04T10:56:00.000Z",
      time: "10:56"
    },
    {
      blood_sugar_level: 99,
      period: "Na lunch",
      date: "2019-10-04T14:47:00.000Z",
      time: "14:47"
    }
  ]
};

const config_test_1 = {
  input_location: {
    step: "step_form_with_array_of_objects",
    question: "measurements"
  },
  transformation: {
    function_name: "text",
    additional_input: [
      {
        seperator_between_entries: "|",
        fields: [
          {
            question_id: "blood_sugar_level",
            suffix: "@"
          },
          {
            question_id: "time"
          }
        ]
      }
    ]
  }
};

const response_test_2 = {
  THUISMEDICATIE_LIST: [
    {
      THUISMEDICATIE_LIST_NAME: "Lormetazepam 2 mg",
      THUISMEDICATIE_LIST_INTERVAL: "dagelijks",
      THUISMEDICATIE_LIST_DOSIS: "1 maal 2 mg",
      THUISMEDICATIE_LIST_TOEDIENINGSWEG: "oraal",
      THUISMEDICATIE_LIST_TOEDIENINGSMOMENT: "voor_slapen_gaan",
      THUISMEDICATIE_LIST_TOEDIENINGSMOMENT_DOSIS: "1 's avonds"
    },
    {
      THUISMEDICATIE_LIST_NAME: "Trazolan 100 mg",
      THUISMEDICATIE_LIST_INTERVAL: "dagelijks",
      THUISMEDICATIE_LIST_DOSIS: " 1/2 100 mg",
      THUISMEDICATIE_LIST_TOEDIENINGSWEG: "oraal",
      THUISMEDICATIE_LIST_TOEDIENINGSMOMENT: "voor_slapen_gaan",
      THUISMEDICATIE_LIST_TOEDIENINGSMOMENT_DOSIS: "avond 1/2"
    },
    {
      THUISMEDICATIE_LIST_NAME: "Crestor 10 mg",
      THUISMEDICATIE_LIST_INTERVAL: "1 om de 2 dagen",
      THUISMEDICATIE_LIST_DOSIS: "1 maal 10 mg",
      THUISMEDICATIE_LIST_TOEDIENINGSWEG: "oraal",
      THUISMEDICATIE_LIST_TOEDIENINGSMOMENT: "voor_slapen_gaan",
      THUISMEDICATIE_LIST_TOEDIENINGSMOMENT_DOSIS: "1 's avonds"
    }
  ]
};

const config_test_2 = {
  input_location: {
    step: "step_form_with_array_of_objects",
    question: "THUISMEDICATIE_LIST"
  },
  transformation: {
    function_name: "text",
    additional_input: [
      {
        seperator_between_entries: "\n\n",
        fields: [
          {
            question_id: "THUISMEDICATIE_LIST_NAME",
            prefix: "Geneesmiddel: ",
            suffix: ", "
          },
          {
            question_id: "THUISMEDICATIE_LIST_DOSIS",
            suffix: ", "
          },
          {
            question_id: "THUISMEDICATIE_LIST_TOEDIENINGSWEG",
            suffix: "\n"
          },
          {
            question_id: "THUISMEDICATIE_LIST_INTERVAL",
            prefix: "Frequentie: ",
            suffix: ", "
          },
          {
            question_id: "THUISMEDICATIE_LIST_DOSIS",
            suffix: ", "
          },
          {
            question_id: "THUISMEDICATIE_LIST_TOEDIENINGSMOMENT_DOSIS"
          }
        ]
      }
    ]
  }
};

const createElementForReadableMessage = (entry, field) => {
  const { question_id, suffix, prefix } = field;
  const valueProp = R.lensProp(question_id);

  const value = R.view(valueProp, entry);

  const result = [];
  result.push(value ? value : "/");

  if (suffix) {
    result.push(suffix);
  }

  if (prefix) {
    result.unshift(prefix);
  }

  return result;
};

const createReadableMessageFromArrayOfObjects = (response, config) => {
  const fields = config.transformation.additional_input[0].fields.map(
    field => field
  );

  const seperator =
    config.transformation.additional_input[0].seperator_between_entries;

  const arrayOfObjectsResponse = R.view(
    R.lensProp(config.input_location.question),
    response
  );

  if (arrayOfObjectsResponse === undefined) {
    const { question } = config.input_location;
    throw new CannotFindfArrayOfObjectQuestionIdInResponse({ question });
  }

  const allEntries = arrayOfObjectsResponse.map(
    (entry, index, arrayOfObjects) => {
      const fieldsOfOneEntry = fields.map(field => {
        const arrayElementsForField = createElementForReadableMessage(
          entry,
          field
        );
        return arrayElementsForField;
      });
      if (arrayOfObjects.length - 1 !== index) {
        fieldsOfOneEntry.push([seperator]);
      }
      return [].concat(...fieldsOfOneEntry);
    }
  );

  const readableMessageAsArray = [].concat(...allEntries);
  const readableMessageAsText = readableMessageAsArray.join("");
  return readableMessageAsText;
};

const AwellPage = () => {
  console.log(
    createReadableMessageFromArrayOfObjects(response_test_1, config_test_1)
  );
  console.log(
    createReadableMessageFromArrayOfObjects(response_test_2, config_test_2)
  );

  return <p>test</p>;
};

export default AwellPage;
