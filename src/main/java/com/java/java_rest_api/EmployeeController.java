package com.java.java_rest_api;

import org.springframework.web.bind.annotation.*;

@RestController
public class EmployeeController {

        @GetMapping(value = "/employees")
        public String getAllEmployees(@RequestParam(value = "value", defaultValue = "World") String name) {
            return String.format("Hello %s!", name);
        }

        @GetMapping("/employees/{id}")
        public String getAnEmployee(@PathVariable int id)
        {
            return String.format("You try to reach the user: %s!", id);
        }

        @PutMapping("/employees/{id}")
        public String updateAnEmployee(@PathVariable int id){
            return String.format("You try to update the user: %s!", id);
        }

        @PostMapping("/employees")
        public String createEmployee() {
            return String.format("You try to create an employee");
        }

        @DeleteMapping("/employees/{id}")
        public String deleteAnEmployee(@PathVariable int id)
        {
            return String.format("You try to delete the user: %s!", id);
        }
}
