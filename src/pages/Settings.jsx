import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSetting, setSettings } from "@settings/store/slices/settings/settingsSlice";

import { Container } from "@settings/components/Container";
import { BaseCard } from "@settings/components/BaseCard";
import { MainTitle } from "@settings/components/typography/MainTitle";
import { FormField } from "@settings/components/form/FormField";
import { FormActions } from "@settings/components/form/FormActions";
import { Button } from "@settings/components/Button";

const Settings = () => {
  const settings = useSelector((state) => state.settings);  
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    menuSlug: settings?.menuSlug || '',
    addOnsSlug: settings?.addOnsSlug || '',
    description: settings?.description || '',
    defaultPrice: settings?.defaultPrice || '',
    location: settings?.location || ''
  });
 
  useEffect(() => {
    if (settings) {
      setFormData({
        menuSlug: settings.menuSlug || '',
        addOnsSlug: settings.addOnsSlug || '',
        description: settings.description || '',
        defaultPrice: settings.defaultPrice || '',
        location: settings.location || ''
      });
    }
  }, [settings]);  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSettings(formData));
  };

  return (
    <Container>
      <BaseCard>
        <MainTitle>Settings</MainTitle>

        <form onSubmit={handleSubmit}>
          <FormField
            label="Menu Items Slug"
            name="menuSlug"
            placeholder="Enter menu items slug"
            description="Define the URL slug for menu items section"
            value={formData.menuSlug}
            onChange={handleChange}
          />

					<FormField
            label="Add-ons Slug"
            name="addOnsSlug"
            placeholder="Enter add-ons slug"
            description="Define the URL slug for add-ons section"
            value={formData.addOnsSlug} 
            onChange={handleChange}
          />

					<FormField
            type="textarea"
            rows="4"
            label="Description"
            name="description"
            placeholder="Enter description"
            value={formData.description}
            onChange={handleChange}
          />

          <FormField
            type="number"
            label="Default Price"
            name="defaultPrice"
            placeholder="0.00"
            description="Set the default price for new items"
            value={formData.defaultPrice}
            onChange={handleChange}
          />

          <FormField
            label="Select Location"
            type="select"
            name="location"
            value={formData.location}
            onChange={handleChange}
            options={[
              { value: "", label: "Choose a location..." },
              { value: "location1", label: "Location 1" },
              { value: "location2", label: "Location 2" },
              { value: "location3", label: "Location 3" }
            ]}
          />

          <FormActions>
            <Button type="submit">Save Settings</Button>
          </FormActions>
        </form>
      </BaseCard>
    </Container>
  );
};

export default Settings;
